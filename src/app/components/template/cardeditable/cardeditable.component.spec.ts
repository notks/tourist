import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeditableComponent } from './cardeditable.component';

describe('CardeditableComponent', () => {
  let component: CardeditableComponent;
  let fixture: ComponentFixture<CardeditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardeditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardeditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
