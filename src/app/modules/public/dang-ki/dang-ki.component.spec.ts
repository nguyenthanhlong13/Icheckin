import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKiComponent } from './dang-ki.component';

describe('DangKiComponent', () => {
  let component: DangKiComponent;
  let fixture: ComponentFixture<DangKiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DangKiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DangKiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
