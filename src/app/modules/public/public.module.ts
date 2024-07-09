import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutes } from './public.routing';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { GiaoDienWebComponent } from './giao-dien-web/giao-dien-web.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutes,
  ],
  declarations: [

  
    GiaoDienWebComponent
  ]
})
export class PublicModule { }
