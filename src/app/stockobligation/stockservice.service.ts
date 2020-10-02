import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { StockObligation } from './stockobligation.component';


@Injectable({
  providedIn: 'root'
})
export class StockserviceService {

  constructor(private http: HttpClient) { }
  getStock():Observable<StockObligation[]>{
    return this.http.get<StockObligation[]>('');
  }
}
