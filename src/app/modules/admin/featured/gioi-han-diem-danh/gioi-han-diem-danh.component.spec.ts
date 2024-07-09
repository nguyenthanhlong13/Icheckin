import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiHanDiemDanhComponent } from './gioi-han-diem-danh.component';

describe('GioiHanDiemDanhComponent', () => {
  let component: GioiHanDiemDanhComponent;
  let fixture: ComponentFixture<GioiHanDiemDanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GioiHanDiemDanhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GioiHanDiemDanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
