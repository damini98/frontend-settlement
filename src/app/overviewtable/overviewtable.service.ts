import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CashInterestRateCard, InterestRates, OpeningBalance, TradeVolumeCard} from './overviewtable.component';

@Injectable({
  providedIn: 'root'
})
export class OverviewtableService {

 
    constructor(private http: HttpClient) { }
    getOpeningBalance():Observable<OpeningBalance[]>{
      return this.http.get<OpeningBalance[]>('http://localhost:7000/stocks');
    }
    getInterestRates():Observable<InterestRates[]>{
      return this.http.get<InterestRates[]>('http://localhost:7002/rates');
    }
    getTradeVolume():Observable<TradeVolumeCard[]>{
      return this.http.get<TradeVolumeCard[]>('http://localhost:7003/tradevolume');
    }
    getCashInterestRate():Observable<CashInterestRateCard[]>{
      return this.http.get<CashInterestRateCard[]>('http://localhost:7003/tradevolume');
    }
  
}
