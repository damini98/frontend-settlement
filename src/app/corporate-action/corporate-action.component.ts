import { Component, OnInit } from '@angular/core';
import { CorporateActionServiceService } from './corporate-action-service.service';

export interface CorporateAction {
  stockName: string;
  openingBalance: number;
  dailyObligation: number;
  netTotal:number;
  corporateAction:number;
  closingBalance: number;

}

@Component({
  selector: 'app-corporate-action',
  templateUrl: './corporate-action.component.html',
  styleUrls: ['./corporate-action.component.css']
})
export class CorporateActionComponent implements OnInit {
  displayedColumns: string[] = ['stockName', 'openingBalance','dailyObligation','netTotal','corporateAction','closingBalance'];
  public getData =[];//obs
  
  constructor(private _httpService: CorporateActionServiceService) { }

  ngOnInit(): void {
    this._httpService.getCorporateAction().subscribe(data => this.getData =data);
  }
}

