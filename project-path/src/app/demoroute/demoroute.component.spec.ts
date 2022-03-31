import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemorouteComponent } from './demoroute.component';

describe('DemorouteComponent', () => {
  let component: DemorouteComponent;
  let fixture: ComponentFixture<DemorouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemorouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemorouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
