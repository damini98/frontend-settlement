import { Component, OnInit } from '@angular/core';
import { CmTradebookService } from './cm-tradebook.service';
export interface CMTrades {
  stockName: string;
  tradeID: number;
  price: number;
  cmName: string;
  orderType: string;
  quantity: number;
  tradeValue: number;
}

// const ELEMENT_DATA: CMTrades[] = [
//   {trade: 1, stockName: 'Apple', price: 1, cm: 'Citi', order: 'BUY' ,quantity: 10 ,tradeValue: 10},
//   {trade: 2, stockName: 'Apple', price: 4, cm: 'Citi',order: 'SELL' ,quantity:10 ,tradeValue:40 },
//   {trade: 3, stockName: 'Netflix', price: 6, cm: 'GS',order: 'BUY',quantity:10 ,tradeValue:60},
//   {trade: 4, stockName: 'Amazon', price: 9, cm: 'MS',order: 'SELL' ,quantity:10 ,tradeValue:90},
//   {trade: 5, stockName: 'Facebook', price: 10, cm: 'Citi', order:'SELL' ,quantity:10 ,tradeValue:100},
// ];


@Component({
  selector: 'app-cm-tradebook',
  templateUrl: './cm-tradebook.component.html',
  styleUrls: ['./cm-tradebook.component.css']
})
export class CmTradebookComponent implements OnInit {

  displayedColumns: string[] = ['tradeID', 'cmName', 'orderType','stockName', 'price', 'quantity','tradeValue'];
  //dataSource = ELEMENT_DATA;
  public getData = []; //obs
  constructor(private _httpService: CmTradebookService ) { }


  ngOnInit(): void {
    this._httpService.getCmTradebook().subscribe(data => this.getData = data);

}


}
