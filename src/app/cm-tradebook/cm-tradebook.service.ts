import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CmTradebookComponent } from './cm-tradebook.component';
// import { GlobalData } from '../assets/data/global-data';

@Injectable({
  providedIn: 'root'
})
export class CmTradebookService {

  constructor(private http:HttpClient){} 
  getCmTradebook():Observable<CmTradebookComponent[]> {
    
    // console.log();
    return this.http.get<CmTradebookComponent[]>("http://localhost:8888/cm-tradebook?cmid=4")
  }
}
