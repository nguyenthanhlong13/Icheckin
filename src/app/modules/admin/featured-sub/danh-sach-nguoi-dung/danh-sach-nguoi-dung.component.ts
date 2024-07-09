import { Component, OnInit } from '@angular/core';
import {PublicServiceService,person,} from '../../../services/public-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { style } from '@angular/animations';


@Component({
  selector: 'app-danh-sach-nguoi-dung',
  templateUrl: './danh-sach-nguoi-dung.component.html',
  styleUrl: './danh-sach-nguoi-dung.component.css',
})


export class DanhSachNguoiDungComponent implements OnInit {
  personList: person[] = [];

  formAdd!: FormGroup;
  formEdit!: FormGroup;

  // first!: number;
  // rows!: number;
  // page!: number;
  // pageCount!: number;

  // first: number = 0;

  // rows: number = 10;

  // onPageChange(event: PageEvent) {
  //   this.first = event.first;
  //   this.rows = event.rows;
  // }

  constructor(
    private publicServiceService: PublicServiceService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {
    this.formAdd = this.formBuilder.group({
      personnel_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      image: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.publicServiceService.getNguoidung().subscribe({
      next: (dataNguoidung) => {
        console.log(dataNguoidung);
        console.log(typeof dataNguoidung);

        this.personList = dataNguoidung;
        console.log(typeof this.personList);

        // a.forEach((f) => {
        //   // this.personList = dataNguoidung;
        //   console.log(f);

        // });
        // this.personList = dataNguoidung.map((dt) => {
        //   return dt;
        // });
        // console.log(this.personList);
      },
    });
  }

  label_add: 'Lưu lại' | 'Cập nhật' = 'Lưu lại';
  label_dialog_fix: 'Lưu thông tin người dùng' | 'Cập nhật thông tin nguời dùng' = 'Lưu thông tin người dùng';
  visible: boolean = false;

  showAdd() {
    this.label_add = 'Lưu lại';
    this.label_dialog_fix = 'Lưu thông tin người dùng';
    this.visible = true;
    this.formAdd.reset({
      personnel_id: null,
      name: null,
      email: null,
      password: null,
      phone: null,
      image: null,
      role: null,
    });
  }

  submitForm() {
    if (this.label_add === 'Lưu lại' && this.label_dialog_fix === 'Lưu thông tin người dùng') {
      this.publicServiceService.addNguoidung(this.formAdd.value).subscribe({
        next: () => {
          alert('Thêm thành công');
          this.ngOnInit();
        },
        error: () => {
          alert('Thêm thất bại');
        }, 
      });
    } else {
      this.publicServiceService
        .editNguoidung(this.dataNguoidung_select.personnel_id ,this.formAdd.value)
        .subscribe({
          next: () => {
            alert('Sửa thành công');
            this.ngOnInit();
          },
          error: () => {
            alert('Sửa thất bại');
          },
        });
    }
  }

  edit: boolean = false;
  dataNguoidung_select: any;

  showEdit(dataNguoidung: any) {
    this.dataNguoidung_select = dataNguoidung;
    this.label_add = 'Cập nhật';
    this.label_dialog_fix =  'Cập nhật thông tin nguời dùng';
    this.visible = true;
    this.formAdd.reset({
      personnel_id: dataNguoidung.personnel_id,
      name: dataNguoidung.name,
      email: dataNguoidung.email,
      password: dataNguoidung.password,
      phone: dataNguoidung.phone,
      image: dataNguoidung.image,
      role: dataNguoidung.role,
    });
  }

  delete: boolean = false;
  showDelete(dataNguoidung: any) {
    this.dataNguoidung_select = dataNguoidung;
    this.delete = true;
    
  }

  submitDelete() {
    console.log(this.dataNguoidung_select);
    this.publicServiceService
      .deleteNguoidung(this.dataNguoidung_select.personnel_id)
      .subscribe({
        next: () => {
          console.log('đã ấn xóa');
          this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Bạn đã xóa thành công', life: 3000 });
          this.delete = false
          this.ngOnInit();
        },

        error: () => {
          alert('xóa  thất bại');
        },
      });
  }

  timkiemcontrol: string = '';

  searchNguoi(){
     this.publicServiceService.getSearch(this.timkiemcontrol).subscribe({
      next:(dataNguoidung_timkiem) =>{
        this.personList = dataNguoidung_timkiem;
        if(dataNguoidung_timkiem.length == 0){
          this.messageService.add({
            severity: 'warn',
            summary: 'Thông báo',
            detail: 'Không có người dùng trên',
          });
        }
      }
     })
  }

  confirm() {
    this.publicServiceService
    .deleteNguoidung(this.dataNguoidung_select.personnel_id)
    .subscribe({
      next: () => {
        console.log('đã ấn xóa');
        this.ngOnInit();
      },

      error: () => {
        alert('xóa  thất bại');
      },
    });
}

noDelete(){
  this.delete = false;
  this.messageService.add({ severity: 'info', summary: 'Thông báo', detail: 'Bạn đã chọn ấn không xóa', life: 3000 });
}

 
}
