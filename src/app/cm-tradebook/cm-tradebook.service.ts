import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CmTradebookComponent } from './cm-tradebook.component';

@Injectable({
  providedIn: 'root'
})
export class CmTradebookService {

  constructor(private http:HttpClient){} 
  getCmTradebook():Observable<CmTradebookComponent[]> {
    return this.http.get<CmTradebookComponent[]>("http://localhost:7000/tradebook/list")
  }
}
