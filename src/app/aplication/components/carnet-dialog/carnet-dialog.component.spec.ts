import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetDialogComponent } from './carnet-dialog.component';

describe('CarnetDialogComponent', () => {
  let component: CarnetDialogComponent;
  let fixture: ComponentFixture<CarnetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
