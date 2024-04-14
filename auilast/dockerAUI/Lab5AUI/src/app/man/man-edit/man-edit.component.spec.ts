import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManEditComponent } from './man-edit.component';

describe('ManEditComponent', () => {
  let component: ManEditComponent;
  let fixture: ComponentFixture<ManEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
