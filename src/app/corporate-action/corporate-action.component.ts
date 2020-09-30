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
// const ELEMENT_DATA: CorporateAction[] = [
//  {name : 'Opening Balance',apple: 1.0079, google: 1522,facebook:200 ,amazon:150, netflix:350},
//  {name :'Daily Obligation',apple: 4.0026, google: 65,facebook:200 ,amazon:150, netflix:350},
//  {name : 'Net Total',apple: 4.0026, google: 65,facebook:200 ,amazon:150, netflix:350},
//  {name : 'Shortage',apple: 0, google: 0,facebook: 0  ,amazon: 0, netflix: 0},
//  {name : 'Bonus',apple: 0, google: 0,facebook: 0  ,amazon: 0, netflix: 0},
//  {name : 'Closing Balance',apple: 10.811, google: 78,facebook:200 ,amazon:150, netflix:350}
// ];

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
  
  // dataSource = ELEMENT_DATA;
}
