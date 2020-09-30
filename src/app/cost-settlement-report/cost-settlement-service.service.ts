import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { CostSettlementReport } from './cost-settlement-report.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostSettlementServiceService {

  constructor(private http: HttpClient) { }
  getCostSettlement():Observable<CostSettlementReport[]>{
           return this.http.get<CostSettlementReport[]>('http://localhost:7000/cost-settlement-report/list');
  }
}
