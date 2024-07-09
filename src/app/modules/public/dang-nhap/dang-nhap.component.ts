import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PublicServiceService } from '../../services/public-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrl: './dang-nhap.component.css',
})
export class DangNhapComponent implements OnInit {
  formlogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private publicServiceService: PublicServiceService,
    private messageService: MessageService,
    private router: Router,
    private authService: PublicServiceService
  ) {
    this.formlogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    
    if(this.authService.isAuth.value){
      this.router.navigate(['admin/trang-chu'])
    }
  }

  ngOnInit(): void {
    console.log(this.authService.isAuth.value)
  }

  onSubmit() {
    const data = {
      email: this.formlogin.controls['email'].value,
      password: this.formlogin.controls['password'].value,
    };
    console.log(data);
    if (this.formlogin.valid) {
      this.publicServiceService.postLogin(data).subscribe({
        next: (res: any) => {
          console.log(res.token);
          
          this.publicServiceService.SignIn(res.token);
          this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Đăng nhập thành công',
          });
          // this.router.navigateByUrl('/admin');
        },

        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Thông báo',
            detail: 'Tài khoản hoặc mật khẩu không đúng',
          });
        },
      });
      console.log(this.formlogin.value);
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Thông báo',
        detail: 'Vui lòng nhập đầy đủ thông tin',
      });
    }
  }
}
