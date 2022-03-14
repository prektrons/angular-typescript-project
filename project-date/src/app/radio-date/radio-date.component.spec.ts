import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDateComponent } from './radio-date.component';

describe('RadioDateComponent', () => {
  let component: RadioDateComponent;
  let fixture: ComponentFixture<RadioDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
