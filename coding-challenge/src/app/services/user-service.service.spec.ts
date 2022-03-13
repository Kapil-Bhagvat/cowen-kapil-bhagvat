import { async, getTestBed, inject, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Resource, UserServiceService } from "./user-service.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

describe('User Service', () => {

    let injector: TestBed;
    let service: UserServiceService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [UserServiceService]
        });
        injector = getTestBed();
        service = injector.get(UserServiceService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('http call test', () => {
        async(
            inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
                http.get(service._baseurl + Resource._users).subscribe((list) => {
                    expect(list).toEqual(10);
                });
                backend.expectOne({
                    url: service._baseurl,
                    method: 'GET'
                });
            })
        )
    });
    it('http call test', () => {
        async(
            inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
                http.get(service._baseurl + "/1/" + Resource._albums).subscribe();
                backend.expectNone({
                    url: service._baseurl + "/1/" + Resource._albums,
                    method: 'GET'
                });
            })
        )
    });
});
