import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {StockObPostCA} from './stockobpostca.component'
@Injectable({
  providedIn: 'root'
})
export class StockobpostcaService {

  constructor(private http: HttpClient) { }
  getStock():Observable<StockObPostCA[]>{
    return this.http.get<StockObPostCA[]>('http://localhost:8888/stock-obligation');
}}
