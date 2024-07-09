import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDangKiComponent } from './quan-ly-dang-ki.component';

describe('QuanLyDangKiComponent', () => {
  let component: QuanLyDangKiComponent;
  let fixture: ComponentFixture<QuanLyDangKiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuanLyDangKiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuanLyDangKiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
