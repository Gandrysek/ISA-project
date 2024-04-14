import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunViewComponent } from './gun-view.component';

describe('GunViewComponent', () => {
  let component: GunViewComponent;
  let fixture: ComponentFixture<GunViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GunViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
