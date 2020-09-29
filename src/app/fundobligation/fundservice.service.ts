import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundserviceService {

  constructor(private http: HttpClient) { }
  getFund(){
    return this.http.get('http://localhost:7000/fund/list');
  }
}
