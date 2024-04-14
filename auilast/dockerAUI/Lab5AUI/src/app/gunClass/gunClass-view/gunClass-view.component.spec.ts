import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunClassViewComponent } from './gunClass-view.component';

describe('GunClassViewComponent', () => {
  let component: GunClassViewComponent;
  let fixture: ComponentFixture<GunClassViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GunClassViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunClassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
