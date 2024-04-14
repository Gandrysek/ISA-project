import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunClassCreateComponent } from './gunClass-create.component';

describe('GunClassCreateComponent', () => {
  let component: GunClassCreateComponent;
  let fixture: ComponentFixture<GunClassCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GunClassCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
