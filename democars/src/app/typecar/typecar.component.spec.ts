import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecarComponent } from './typecar.component';

describe('TypecarComponent', () => {
  let component: TypecarComponent;
  let fixture: ComponentFixture<TypecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
