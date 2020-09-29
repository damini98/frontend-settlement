import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TradebookComponent } from './tradebook.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradebookService {

  constructor(private http:HttpClient){} 
  getTradebook():Observable<TradebookComponent[]> {
    return this.http.get<TradebookComponent[]>("http://localhost:7000/tradebook/list")
  }
}