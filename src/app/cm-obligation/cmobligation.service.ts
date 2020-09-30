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
    return this.http.get<cmStockObligation[]>('http://localhost:7000/stocks');
  }
  getCMFundObligation():Observable<cmFundObligation[]>{
    return this.http.get<cmFundObligation[]>('http://localhost:7001/cashrate');
  }

}
