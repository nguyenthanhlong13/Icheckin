import { Component, OnInit } from '@angular/core';
import { PublicServiceService } from '../../../services/public-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-thong-bao',
  templateUrl:'./thong-bao.component.html',
  styleUrl: './thong-bao.component.css',
})
export class ThongBaoComponent implements OnInit{
  thongbao_List: any[] = [];
  formAdd!: FormGroup;
  hien_form_thong_bao: boolean = false;
  timkiemcontrol: string = '';
  delete: boolean = false;
  dataThongBao_select: any;
  visible: boolean = false;
  label_add: 'Lưu lại' | 'Cập nhật' = 'Lưu lại';
  label_dialog_fix: 'Lưu thông tin người dùng' | 'Cập nhật thông tin thông báo' = 'Lưu thông tin người dùng';

  constructor(
    private publicServiceService: PublicServiceService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ){
    this.formAdd = this.formBuilder.group({
      title: ['', [Validators.required] ],
      description: ['', [Validators.required] ],
    })

  }
  ngOnInit(): void {
    this.publicServiceService.getThongbao().subscribe({
      next: (dataThongbao) => {
        this.thongbao_List = dataThongbao;
      }
    })
  }

  showAdd(){
    this.label_add = 'Lưu lại';
    this.label_dialog_fix = 'Lưu thông tin người dùng';
    this.visible = true;
    this.formAdd.reset({
      title: null,
      description: null,
    });
  }

  searchThongbao() {}

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
        .editThongbao(this.dataThongBao_select.id ,this.formAdd.value)
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

  

  showEdit(dataThongbao: any) {
    this.visible = true;
    this.dataThongBao_select = dataThongbao;
    this.label_add = 'Cập nhật';
    this.label_dialog_fix =  'Cập nhật thông tin thông báo';
    this.visible = true;
    this.formAdd.reset({
      title: dataThongbao.title,
      description: dataThongbao.description,
    });
  }

  showDelete(dataThongbao: any) {
    this.delete = true;
    this.dataThongBao_select = dataThongbao;
  }

  submitDelete(){
    this.publicServiceService.deleteThongbao(this.dataThongBao_select.id).subscribe({
      next: ()=>{
        this.delete = false;
        this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Xóa thành công', life: 3000 });  
        this.ngOnInit();
      } 
    })
    
  }

  noDelete(){
    this.delete = false;
    this.messageService.add({ severity: 'info', summary: 'Thông báo', detail: 'Bạn đã chọn ấn không xóa', life: 3000 });
  }
}
