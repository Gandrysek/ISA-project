import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunCreateComponent } from './gun-create.component';

describe('GunCreateComponent', () => {
  let component: GunCreateComponent;
  let fixture: ComponentFixture<GunCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GunCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
