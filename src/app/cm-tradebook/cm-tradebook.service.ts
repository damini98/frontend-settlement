import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CmTradebookComponent } from './cm-tradebook.component';
// import { GlobalData } from '../assets/data/global-data';

@Injectable({
  providedIn: 'root'
})
export class CmTradebookService {
  constructor(private http:HttpClient){} 
  getCmTradebook():Observable<CmTradebookComponent[]> {
    const params = new HttpParams().set('cmid', '2');
    return this.http.get<CmTradebookComponent[]>( "http://localhost:8888/api/cm-tradebook?token=AARAOy1sO1dsUZIWjgj8");
  }
}
