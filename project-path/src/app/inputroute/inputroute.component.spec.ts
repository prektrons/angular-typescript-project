import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputrouteComponent } from './inputroute.component';

describe('InputrouteComponent', () => {
  let component: InputrouteComponent;
  let fixture: ComponentFixture<InputrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
