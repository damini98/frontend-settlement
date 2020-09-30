import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FundObligation } from './fundobligation.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FundserviceService {
  constructor(private http: HttpClient) { }
  getFund(): Observable<FundObligation[]> {
    return this.http.get<FundObligation[]>('http://localhost:8888/fund-obligation');
  }
}
