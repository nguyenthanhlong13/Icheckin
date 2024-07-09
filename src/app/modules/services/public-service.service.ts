import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface person {
  personnel_id: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  image: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class PublicServiceService {
  public isAuth = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router) {
    this.autoSignIn();
  }

  autoSignIn() {
    if (localStorage.getItem('token')) {
      this.isAuth.next(true);
      this.router.navigate(['/admin']);
    }
  }

  SignIn(token: string) {
    console.log(token);
    
    localStorage.setItem('token', token);
    this.isAuth.next(true);
    this.router.navigate(['/admin']);
  }

  SignOut() {
    localStorage.removeItem('token');
    this.isAuth.next(false);
    this.router.navigate(['/dang-nhap']);
  }

  private readonly api = 'https:/baocaonhom3.pro.vn/public/api';

  postLogin(dataProduct: any) {
    return this.httpClient.post(this.api + '/login-personnel', dataProduct);
  }

  postSignUp(dataNguoidung: any) {
    return this.httpClient.post(this.api + '/register', dataNguoidung);
  }



  //------------------------------------------------- Danh sách người dùng------------------------------------------

  getNguoidung(): Observable<person[]> {
    const token = localStorage.getItem('token'); // Thay YOUR_TOKEN_VALUE bằng cách lấy token thực tế

  // Thiết lập header Authorization với token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.httpClient.get<{data:person[]}>(this.api + '/get-all-personnel', {headers} ).pipe(map(res => {
      return res.data
    }));
  }

  addNguoidung(dataNguoidung: person) {
    return this.httpClient.post(this.api + '/product/add', dataNguoidung);
  }

  editNguoidung(id: string, dataNguoidung: any) {
    const token = localStorage.getItem('token'); // Thay YOUR_TOKEN_VALUE bằng cách lấy token thực tế

  // Thiết lập header Authorization với token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.httpClient.put(
      this.api + '/update-personnel/' + id.toString(), dataNguoidung, {headers});
  }

  deleteNguoidung(id: string) {
    const token = localStorage.getItem('token'); // Thay YOUR_TOKEN_VALUE bằng cách lấy token thực tế

  // Thiết lập header Authorization với token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

    return this.httpClient.delete(
      this.api + '/delete-personnel/' + id.toString(), {headers}
    );
  }

  getSearch(search: string) : Observable<person[]> {
    const token = localStorage.getItem('token'); // Thay YOUR_TOKEN_VALUE bằng cách lấy token thực tế

  // Thiết lập header Authorization với token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.httpClient.get <{data:person[]}>(this.api + '/get-all-personnel/' + search.toString(), {headers} ).pipe(map(res => {
      return res.data
    }));
  }


  //------------------------------------------------- Thông báo------------------------------------------

  getThongbao(): Observable<any[]> {
    // Lấy token từ cookie hoặc nơi lưu trữ khác
  const token = localStorage.getItem('token'); // Thay YOUR_TOKEN_VALUE bằng cách lấy token thực tế

  // Thiết lập header Authorization với token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    console.log("service đã chạy");
    return this.httpClient.get<{data:any[]}>(this.api + '/get-all-notification',{headers}).pipe(map(res => {
      return res.data
    }));
  }


  deleteThongbao(id: string){
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.delete(this.api + '/delete-notification/'+ id.toString(), {headers})
  }

  editThongbao(id: string, dataThongbao:any){
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.put(this.api + '/update-notification/'+ id.toString(), dataThongbao, {headers})
  }

  
  


}
