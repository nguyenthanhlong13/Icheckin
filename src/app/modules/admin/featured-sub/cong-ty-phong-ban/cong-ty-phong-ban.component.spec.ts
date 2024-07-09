import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongTyPhongBanComponent } from './cong-ty-phong-ban.component';

describe('CongTyPhongBanComponent', () => {
  let component: CongTyPhongBanComponent;
  let fixture: ComponentFixture<CongTyPhongBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CongTyPhongBanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CongTyPhongBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
