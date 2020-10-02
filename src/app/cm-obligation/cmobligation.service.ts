import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cmStockObligation, cmFundObligation } from './cm-obligation.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CmobligationService {

  constructor(private http: HttpClient) { }
  getCMStockObligation():Observable<cmStockObligation[]>{
    return this.http.get<cmStockObligation[]>('http://localhost:8888/api/cm-stock-obligation?token=AARAOy1sO1dsUZIWjgj8');
  }
  getCMFundObligation():Observable<cmFundObligation[]>{
    return this.http.get<cmFundObligation[]>('http://localhost:8888/api/cm-fund-obligation?token=AARAOy1sO1dsUZIWjgj8');
  }

}
