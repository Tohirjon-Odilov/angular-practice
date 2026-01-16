import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUsersApp } from './simple-users-app';

describe('SimpleUsersApp', () => {
  let component: SimpleUsersApp;
  let fixture: ComponentFixture<SimpleUsersApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleUsersApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleUsersApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
