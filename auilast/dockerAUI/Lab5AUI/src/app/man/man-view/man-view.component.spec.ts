import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManViewComponent } from './man-view.component';

describe('ManViewComponent', () => {
  let component: ManViewComponent;
  let fixture: ComponentFixture<ManViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
