import { Component, OnInit } from '@angular/core';
import { TradebookService } from './tradebook.service';

export interface Trades {
  stockName: string;
  tradeID: number;
  price: number;
  buyerName: string;
  sellerName: string;
  quantity: number;
  tradeValue: number;
}

// const ELEMENT_DATA: Trades[] = [
//   {trade: 1, stockName: 'Apple', price: 1, buyerName: 'Citi', sellerName: 'MS' ,quantity: 10 ,tradeValue: 10},
//   {trade: 2, stockName: 'Apple', price: 4, buyerName: 'Citi',sellerName: 'Citi' ,quantity:10 ,tradeValue:40 },
//   {trade: 3, stockName: 'Netflix', price: 6, buyerName: 'GS',sellerName: 'BoA',quantity:10 ,tradeValue:60},
//   {trade: 4, stockName: 'Amazon', price: 9, buyerName: 'MS',sellerName: 'BoA' ,quantity:10 ,tradeValue:90},
//   {trade: 5, stockName: 'Facebook', price: 10, buyerName: 'Citi', sellerName:'GS' ,quantity:10 ,tradeValue:100},
// ];

@Component({
  selector: 'app-tradebook',
  templateUrl: './tradebook.component.html',
  styleUrls: ['./tradebook.component.css']
})
export class TradebookComponent {


  displayedColumns: string[] = ['tradeID', 'buyerName', 'sellerName','stockName', 'price', 'quantity','tradeValue'];
  //dataSource = ELEMENT_DATA;
  public getData = []; //obs
  constructor(private _httpService: TradebookService ) { }


  ngOnInit(): void {
    this._httpService.getTradebook().subscribe(data => this.getData = data);

}
}
