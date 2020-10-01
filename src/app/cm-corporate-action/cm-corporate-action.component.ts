import { Component, OnInit } from '@angular/core';
import {CmCorporateActionServiceService} from './cm-corporate-action-service.service'

export interface CorporateAction {
  stockName: string;
  openingBalance: number;
  dailyObligation: number;
  netTotal:number;
  corporateAction:number;
  closingBalance: number;

}

@Component({
  selector: 'app-cm-corporate-action',
  templateUrl: './cm-corporate-action.component.html',
  styleUrls: ['./cm-corporate-action.component.css']
})
export class CmCorporateActionComponent implements OnInit {
  displayedColumns: string[] = ['stockName', 'openingBalance','dailyObligation','netTotal','corporateAction','closingBalance'];
  public getData =[];//obs
  
  constructor(private _httpService: CmCorporateActionServiceService) { }

  ngOnInit(): void {
    this._httpService.getCorporateAction().subscribe(data => this.getData =data);
  }

}
