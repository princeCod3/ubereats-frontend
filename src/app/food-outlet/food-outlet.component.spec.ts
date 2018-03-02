import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOutletComponent } from './food-outlet.component';

describe('FoodOutletComponent', () => {
  let component: FoodOutletComponent;
  let fixture: ComponentFixture<FoodOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
