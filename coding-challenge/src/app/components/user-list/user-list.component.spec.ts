// import { HttpClientModule } from "@angular/common/http";
// import { HttpTestingController } from "@angular/common/http/testing";
// import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
// import { ActivatedRoute, Router } from "@angular/router";
// import { UserServiceService } from "src/app/services/user-service.service";
// import { UserListComponent } from "./user-list.component";

// describe('UserList component', () => {

//     let component: UserListComponent;
//     let fixture: ComponentFixture<UserListComponent>;
//     let userService: UserServiceService;
//     let route: ActivatedRoute;
//     let router: Router;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations: [ UserListComponent, HttpClientModule ],
//             providers: [UserServiceService ]
//         });
//         // inject both the component and the dependent service.
//         fixture = TestBed.createComponent(UserListComponent);
//         component = fixture.componentInstance;
//         component = new UserListComponent(
//             userService, 
//             route,
//             router
//         )
//     });

//     it('should welcome logged in user after Angular calls ngOnInit', () => {

//         let httpMock = getTestBed().get(HttpTestingController);        
//         const req = httpMock.expectOne(`${userService._baseurl}/users`);
//         expect(req.request.method).toBe('GET');
//       });
    
// })