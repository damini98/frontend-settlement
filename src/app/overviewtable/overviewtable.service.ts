import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { InterestRates, OpeningBalance, OverviewtableComponent} from './overviewtable.component';

@Injectable({
  providedIn: 'root'
})
export class OverviewtableService {
 
    constructor(private http: HttpClient) { }
    getOpeningBalance():Observable<OpeningBalance[]>{
      return this.http.get<OpeningBalance[]>('http://localhost:7000/stocks');
    }
    getInterestRates():Observable<InterestRates[]>{
      return this.http.get<InterestRates[]>('http://localhost:7001/rates');
    }
    
  
}
