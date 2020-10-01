import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TradebookComponent } from './tradebook.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradebookService {
  constructor(private http:HttpClient){} 
  getTradebook():Observable<TradebookComponent[]> {
    // const params = new HttpParams().set('cmid', '2');
    // return this.http.get<TradebookComponent[]>( "http://localhost:8888/cm-tradebook", {params});
    return this.http.get<TradebookComponent[]>("http://localhost:8888/api/tradebook?token=-5038cacb_174e3ceb81")
  }
}