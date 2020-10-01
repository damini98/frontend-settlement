import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CorporateAction} from './cm-corporate-action.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CmCorporateActionServiceService {

  constructor(private http: HttpClient) { }
  getCorporateAction():Observable<CorporateAction[]>{
    return this.http.get<CorporateAction[]>('http://localhost:8888/api/cm-corporate-action-report?token=AARAOy1sO1dsUZIWjgj8');
  }
}
