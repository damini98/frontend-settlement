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
      return this.http.get<OpeningBalance[]>('http://localhost:8888/api/opening-balance?token=-5038cacb_174e3ceb81');
    }
    getInterestRates():Observable<InterestRates[]>{
      return this.http.get<InterestRates[]>('http://localhost:8888/api//stock-borrowing-rate?token=-5038cacb_174e3ceb81');
    }
    getTradeVolume():Observable<TradeVolumeCard[]>{
      return this.http.get<TradeVolumeCard[]>('http://localhost:8888/api/trade-volume?token=-5038cacb_174e3ceb81');
    }
    getCashInterestRate():Observable<CashInterestRateCard[]>{
      return this.http.get<CashInterestRateCard[]>('http://localhost:8888/api/interest-rate?token=-5038cacb_174e3ceb81');
    }
    //TODO
  
}
