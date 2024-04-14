import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunClassEditComponent } from './gunClass-edit.component';

describe('GunClassEditComponent', () => {
  let component: GunClassEditComponent;
  let fixture: ComponentFixture<GunClassEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GunClassEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunClassEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
