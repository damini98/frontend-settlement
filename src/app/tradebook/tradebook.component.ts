import { Component, OnInit } from '@angular/core';

export interface Trades {
  stock: string;
  trade: number;
  price: number;
  buyer: string;
  seller: string;
  qty: number;
  tradevol: number;
}

const ELEMENT_DATA: Trades[] = [
  {trade: 1, stock: 'Apple', price: 1, buyer: 'Citi', seller: 'MS' ,qty: 10 ,tradevol: 10},
  {trade: 2, stock: 'Apple', price: 4, buyer: 'Citi',seller: 'Citi' ,qty:10 ,tradevol:40 },
  {trade: 3, stock: 'Netflix', price: 6, buyer: 'GS',seller: 'BoA',qty:10 ,tradevol:60},
  {trade: 4, stock: 'Amazon', price: 9, buyer: 'MS',seller: 'BoA' ,qty:10 ,tradevol:90},
  {trade: 5, stock: 'Facebook', price: 10, buyer: 'Citi', seller:'GS' ,qty:10 ,tradevol:100},
];

@Component({
  selector: 'app-tradebook',
  templateUrl: './tradebook.component.html',
  styleUrls: ['./tradebook.component.css']
})
export class TradebookComponent {


  displayedColumns: string[] = ['trade', 'buyer', 'seller','stock', 'price', 'qty','tradevol'];
  dataSource = ELEMENT_DATA;

}
