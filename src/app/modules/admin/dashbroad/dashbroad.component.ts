import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PublicServiceService } from '../../services/public-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrl: './dashbroad.component.css',
})
export class DashbroadComponent implements OnInit {

  items!: MenuItem[];
  blank: string = '';
  activeTab: string = '';
  activeTab2: string = '';


  slide_bar = [
    {
      label: 'Trang chủ',
      routerLink: ['/admin/trang-chu'],

      command: () => {
        (this.activeTab = 'Trang chủ'), (this.activeTab2 = '');
       
      },
      icon: 'pi pi-home',
    },
    {
      label: 'Người dùng',
      icon: 'pi pi-user',
      items: [
        {
          label: 'Nhóm người dùng',
          routerLink: ['/admin/nguoi-dung/nhom-nguoi-dung'],
          command: () => {
            this.activeTab = 'Người dùng';
            this.activeTab2 = 'Nhóm người dùng';
          },
          icon: 'fa-solid fa-users',
          styleClass: 'items-child',
        },
        {
          label: 'Công ty-phòng ban',
          routerLink: ['/admin/nguoi-dung/cong-ty-phong-ban'],
          command: () => {
            this.activeTab = 'Người dùng';
            this.activeTab2 = 'Công ty phòng ban';
          },
          icon: ' pi pi-warehouse',
          styleClass: 'items-child',
        },
        {
          label: 'Phòng ban',
          routerLink: ['/admin/nguoi-dung/phong-ban'],
          command: () => {
            this.activeTab = 'Người dùng';
            this.activeTab2 = 'Phòng ban';
          },
          icon: 'fa-solid fa-house-user',
          styleClass: 'items-child',
        },
        {
          label: 'Danh sách người dùng',
          routerLink: ['/admin/nguoi-dung/danh-sach-nguoi-dung'],
          command: () => {
            this.activeTab = 'Người dùng';
            this.activeTab2 = 'Danh sách người dùng';
          },
          icon: 'pi pi-user',
          styleClass: 'items-child',
        },
      ],
    },
    {
      label: 'Thông báo',
      routerLink: ['/admin/thong-bao'],
      command: () => {
        this.activeTab = 'Thông báo';
        this.activeTab2 = '';
      },
      icon: 'pi pi-bell',
    },
    {
      label: 'Quản lý đăng kí',
      routerLink: ['/admin/quan-ly-dang-ki'],
      command: () => {
        this.activeTab = 'Quản lý đăng kí';
        this.activeTab2 = '';
      },
      icon: 'pi pi-book',
    },
    {
      label: 'Quản lý nhân viên',
      routerLink: ['/admin/quan-ly-nhan-vien'],
      command: () => {
        this.activeTab = 'Quản lý nhân viên';
        this.activeTab2 = '';
      },
      icon: 'pi pi-users',
    },
    {
      label: 'Giới hạn điểm danh',
      id: '/admin/gioi-han-diem-danh',
      icon: 'pi pi-calendar',
      items: [
        {
          label: 'Vị trí',
          routerLink: ['/admin/gioi-han-diem-danh/vi-tri'],
          command: () => {
            this.activeTab = 'Giới hạn điểm danh';
            this.activeTab2 = 'Vị trí';
          },
          icon: 'pi pi-map-marker',
          styleClass: 'items-child',
        },
        {
          label: 'Wifi',
          routerLink: ['/admin/gioi-han-diem-danh/wifi'],
          command: () => {
            this.activeTab2 = 'Wifi';
          },
          icon: 'pi pi-wifi',
          styleClass: 'items-child',
        },
        {
          label: 'Thời gian',
          routerLink: ['/admin/gioi-han-diem-danh/thoi-gian'],
          command: () => {
            this.activeTab2 = 'Thời gian  ';
          },
          icon: 'pi pi-clock',
          styleClass: 'items-child',
        },
      ],
    },
    {
      label: 'Thống kê',
      routerLink: ['/admin/thong-ke'],
      command: () => {
        this.activeTab = 'Thống kê';
        this.activeTab2 = '';
      },
      icon: 'pi pi-chart-bar',
    },
    {
      label: 'QR-Code',
      routerLink: ['/admin/qr-code'],
      command: () => {
        this.activeTab = 'QR-Code';
        this.activeTab2 = '';
      },
      icon: 'pi pi-qrcode',
    },
  ];

  constructor(private publicServiceService : PublicServiceService,
              private messageService : MessageService
  ) {}

  email = localStorage.getItem('email');

  SignOut(){
    this.publicServiceService.SignOut();
  }

  ngOnInit() {
    this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đăng nhập thành công' });
    this.items = [
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            shortcut: '⌘+N',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
            command: () => {
             this.publicServiceService.SignOut();
          },
          },
        ],
      },
    ];

    //   console.log(window.location.pathname);
    //   console.log(this.router.url);
    //   const index = this.slide_bar.findIndex(
    //     (i) => window.location.pathname === i.id
    //   );
    //   if (index !== -1) {
    //     this.activeTab = this.slide_bar[index].label;
    //   }
    // }

    // onChangeActive(slide_bar: { label: string; id: string }) {
    //   console.log(slide_bar);
    //   console.log(this.router.url);
    //   this.activeTab = slide_bar.label;
  }

  helloo(){
    console.log(1123);
  }

  
}
