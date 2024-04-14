import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManCreateComponent } from './man-create.component';

describe('ManCreateComponent', () => {
  let component: ManCreateComponent;
  let fixture: ComponentFixture<ManCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
