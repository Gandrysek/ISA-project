import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunEditComponent } from './gun-edit.component';

describe('GunEditComponent', () => {
  let component: GunEditComponent;
  let fixture: ComponentFixture<GunEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GunEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
