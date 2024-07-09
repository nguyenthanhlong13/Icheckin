import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbroadComponent } from './modules/admin/dashbroad/dashbroad.component';
import { GioiHanDiemDanhComponent } from './modules/admin/featured/gioi-han-diem-danh/gioi-han-diem-danh.component';
import { NguoiDungComponent } from './modules/admin/featured/nguoi-dung/nguoi-dung.component';
import { QrCodeComponent } from './modules/admin/featured/qr-code/qr-code.component';
import { QuanLyDangKiComponent } from './modules/admin/featured/quan-ly-dang-ki/quan-ly-dang-ki.component';
import { QuanLyNhanVienComponent } from './modules/admin/featured/quan-ly-nhan-vien/quan-ly-nhan-vien.component';
import { ThongBaoComponent } from './modules/admin/featured/thong-bao/thong-bao.component';
import { ThongKeComponent } from './modules/admin/featured/thong-ke/thong-ke.component';
import { DangNhapComponent } from './modules/public/dang-nhap/dang-nhap.component';
import { DangKiComponent } from './modules/public/dang-ki/dang-ki.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
// import { authGuard } from './auth.guard';
import { DialogModule } from 'primeng/dialog';
import { AdminModule } from './modules/admin/admin.module';
import { DanhSachNguoiDungComponent } from './modules/admin/featured-sub/danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    DashbroadComponent,
    GioiHanDiemDanhComponent,
    NguoiDungComponent,
    QrCodeComponent,
    QuanLyDangKiComponent,
    QuanLyNhanVienComponent,
    ThongBaoComponent,
    ThongKeComponent,
    DangNhapComponent,
    DangKiComponent,
    DanhSachNguoiDungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    BreadcrumbModule,
    RouterModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    ToolbarModule,
    PanelMenuModule,
    FloatLabelModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordModule,
    ToastModule,
    HttpClientModule,
    DialogModule,
    PaginatorModule,
    ConfirmDialogModule
  ],
  providers: [
    MessageService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
