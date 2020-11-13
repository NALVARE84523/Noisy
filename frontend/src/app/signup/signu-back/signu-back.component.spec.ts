import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuBackComponent } from './signu-back.component';

describe('SignuBackComponent', () => {
  let component: SignuBackComponent;
  let fixture: ComponentFixture<SignuBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
