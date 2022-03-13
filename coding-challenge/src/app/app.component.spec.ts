import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from "./app.component"

describe('App component', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component : AppComponent;
    let buttonElm: DebugElement;
    
    it('Dashboard buttons should show correct classes', () => {

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(component.title).toBe("List of Members");
        buttonElm = fixture.debugElement.query(By.css('.btn .active'));
        expect(buttonElm).toBeTruthy;

    });
    
});