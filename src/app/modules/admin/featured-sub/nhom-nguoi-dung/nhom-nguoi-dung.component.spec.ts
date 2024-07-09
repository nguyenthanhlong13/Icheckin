import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomNguoiDungComponent } from './nhom-nguoi-dung.component';

describe('NhomNguoiDungComponent', () => {
  let component: NhomNguoiDungComponent;
  let fixture: ComponentFixture<NhomNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NhomNguoiDungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NhomNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
