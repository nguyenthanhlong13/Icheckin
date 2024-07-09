import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutes } from './admin.routing';
import { TrangChuComponent } from './featured/trang-chu/trang-chu.component';
import { DanhSachNguoiDungComponent } from './featured-sub/danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';
import { CongTyPhongBanComponent } from './featured-sub/cong-ty-phong-ban/cong-ty-phong-ban.component';
import { NhomNguoiDungComponent } from './featured-sub/nhom-nguoi-dung/nhom-nguoi-dung.component';
import { PhongBanComponent } from './featured-sub/phong-ban/phong-ban.component';
import { ThoiGianComponent } from './featured-sub/thoi-gian/thoi-gian.component';
import { ViTriComponent } from './featured-sub/vi-tri/vi-tri.component';
import { WifiComponent } from './featured-sub/wifi/wifi.component';
@NgModule({
  imports: [
    CommonModule,
     AdminRoutes
    ],
  declarations: [
    TrangChuComponent,
    CongTyPhongBanComponent,
    NhomNguoiDungComponent,
    PhongBanComponent,
    ThoiGianComponent,
    ViTriComponent,
    WifiComponent,
  ],
})
export class AdminModule {}
