import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CorporateAction} from './corporate-action.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorporateActionServiceService {

  constructor(private http: HttpClient) { }
  getCorporateAction():Observable<CorporateAction[]>{
    return this.http.get<CorporateAction[]>('http://localhost:7000/corporate-action/list');
  }

}
