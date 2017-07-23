import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResultsComponent } from './auth-results.component';

describe('AuthResultsComponent', () => {
  let component: AuthResultsComponent;
  let fixture: ComponentFixture<AuthResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
