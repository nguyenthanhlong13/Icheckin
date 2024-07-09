import { Routes, RouterModule } from '@angular/router';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKiComponent } from './dang-ki/dang-ki.component';

const routes: Routes = [
  {
    path: 'dang-nhap',
    component: DangNhapComponent,
  },

  {
    path: 'dang-ki',
    component: DangKiComponent,
  },

  {
    path: '***',
    redirectTo: '/dang-nhap'
  }
  

];

export const PublicRoutes = RouterModule.forChild(routes);
