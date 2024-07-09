import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicServiceService } from '../../services/public-service.service';
import { MessageService } from 'primeng/api';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-dang-ki',
  templateUrl: './dang-ki.component.html',
  styleUrl: './dang-ki.component.css',
  template: `
    <ngx-lottie [options]="animationOptions" [width]="400" [height]="400"></ngx-lottie>`,
})
export class DangKiComponent {
  formSignUp!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private publicServiceService: PublicServiceService,
    private messageService: MessageService
  ) {
    this.formSignUp = this.formBuilder.group({
      // Validators.pattern(/(.*?){3,30}/)
      ho_va_ten: [ '', [   Validators.required,   Validators.minLength(3),   Validators.maxLength(30), ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      randomPersonnelId: ['',]
    });
  }

  get f() {
    return this.formSignUp.controls;
  }

  showname() {
    console.log(this.f['ho_va_ten'].valid);
  }
  SubmitSignUp() {
    const data = {
      name: this.formSignUp.controls['ho_va_ten'].value,
      email: this.formSignUp.controls['email'].value,
      password: this.formSignUp.controls['password'].value,
    };
    console.log(data);
    console.log(this.formSignUp.valid);

    if (this.formSignUp.valid) {
      this.publicServiceService.postSignUp(data).subscribe({
        next: () => {
          this.formSignUp.reset();
          this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Đăng ký thành công',
          });
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Thông báo',
            detail: 'Tài khoản đã tồn tại',
          });
          // hiện thông báo lỗi ở sever
          // this.messageService.add({ severity: 'warn ', summary: 'Thông báo', detail: error.error.message });
        },
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Thông báo',
        detail: 'Vui lòng nhập đầy đủ thông tin',
      });
    }
  }

  isdisabled: boolean = false;

  randomPersonnelId: string = '';

  generateRandomId() {
    // Tạo số ngẫu nhiên từ 0 đến 9999
    const randomNumber = Math.floor(Math.random() * 10000);
    // Định dạng số ngẫu nhiên thành chuỗi có 4 chữ số (ví dụ: 0005, 0012, 9999)
    const randomNumberStr = randomNumber.toString().padStart(4, '0');
    // Ghép chuỗi "NV" với số ngẫu nhiên
    const random_Personnel_Id = 'NV' + randomNumberStr;
    // this.randomPersonnelId = random_Personnel_Id;

    this.f['randomPersonnelId'].setValue(random_Personnel_Id)
  }
}
