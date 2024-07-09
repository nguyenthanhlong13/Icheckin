import { Routes, RouterModule } from '@angular/router';
import { NguoiDungComponent } from './featured/nguoi-dung/nguoi-dung.component';
import { TrangChuComponent } from './featured/trang-chu/trang-chu.component';
import { ThongBaoComponent } from './featured/thong-bao/thong-bao.component';
import { QuanLyDangKiComponent } from './featured/quan-ly-dang-ki/quan-ly-dang-ki.component';
import { QuanLyNhanVienComponent } from './featured/quan-ly-nhan-vien/quan-ly-nhan-vien.component';
import { ThongKeComponent } from './featured/thong-ke/thong-ke.component';
import { QrCodeComponent } from './featured/qr-code/qr-code.component';
import { CongTyPhongBanComponent } from './featured-sub/cong-ty-phong-ban/cong-ty-phong-ban.component';
import { NhomNguoiDungComponent } from './featured-sub/nhom-nguoi-dung/nhom-nguoi-dung.component';
import { PhongBanComponent } from './featured-sub/phong-ban/phong-ban.component';
import { ThoiGianComponent } from './featured-sub/thoi-gian/thoi-gian.component';
import { ViTriComponent } from './featured-sub/vi-tri/vi-tri.component';
import { WifiComponent } from './featured-sub/wifi/wifi.component';
import { DanhSachNguoiDungComponent } from './featured-sub/danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';

const routes: Routes = [
  { path: '', component: TrangChuComponent },
  { path: 'trang-chu', component: TrangChuComponent },
  { path: 'thong-bao', component: ThongBaoComponent },
  {
    path: 'nguoi-dung',
    loadChildren: () => import('./admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'gioi-han-diem-danh',
    loadChildren: () => import('./admin.module').then((m) => m.AdminModule),
  },
  { path: 'quan-ly-dang-ki', component: QuanLyDangKiComponent },
  { path: 'quan-ly-nhan-vien', component: QuanLyNhanVienComponent },

  

  { path: 'thong-ke', component: ThongKeComponent },
  { path: 'qr-code', component: QrCodeComponent },

  { path: 'cong-ty-phong-ban', component: CongTyPhongBanComponent },
  { path: 'nhom-nguoi-dung', component: NhomNguoiDungComponent },
  { path: 'phong-ban', component: PhongBanComponent },
  { path: 'danh-sach-nguoi-dung', component: DanhSachNguoiDungComponent },

  { path: 'thoi-gian', component: ThoiGianComponent },
  { path: 'vi-tri', component: ViTriComponent },
  { path: 'wifi', component: WifiComponent },
];

export const AdminRoutes = RouterModule.forChild(routes);
