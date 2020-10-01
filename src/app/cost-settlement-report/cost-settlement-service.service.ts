import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { CostSettlementReport } from './cost-settlement-report.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostSettlementServiceService {

  constructor(private http: HttpClient) { }
  getCostSettlement(): Observable<CostSettlementReport[]> {
    const params = new HttpParams().set('cmid', '1');
    return this.http.get<CostSettlementReport[]>('http://localhost:8888/api/cm-cost-of-settlement?token=AARAOy1sO1dsUZIWjgj8');
  }
}
