import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  GetCustomer(): Observable<Customer[]> {
    let result = this.http.get<Customer[]>('http://localhost:3000/customer');
    //console.log(result);
    return result;
  }
}
