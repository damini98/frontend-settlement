
import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { OverviewtableService } from './overviewtable.service';


/**
 * @title Table with pagination
 */
export interface TradeVolumeCard{
  tradeVolume: number;
}
export interface CashInterestRateCard{
  cashInterestRate: number;

}
export interface OpeningBalance {
  clearingmember: string;
  // cashBalance: number;
  apple: number;
  google: number;
  facebook:number;
  amazon:number;
  netflix: number;

}

export interface InterestRates{
 stock: string;
 borrowingcost: number;
}

// const ELEMENT_DATA: OpeningBalance[] = [
//   {cash: 10, clearingmember: 'Citi', apple: 1.0079, google: 1522,facebook:200 ,amazon:150, netflix:350},
//   {cash: 20, clearingmember: 'GS', apple: 4.0026, google: 65,facebook:200 ,amazon:150, netflix:350},
//   {cash: 35, clearingmember: 'DB', apple: 6.941, google: 45,facebook:200 ,amazon:150, netflix:350},
//   {cash: 44, clearingmember: 'MS', apple: 9.0122, google: 45,facebook:200 ,amazon:150, netflix:350},
//   {cash: 57, clearingmember: 'BoA', apple: 10.811, google: 78,facebook:200 ,amazon:150, netflix:350},
// ];

// const INTEREST_DATA: InterestRates[] = [
//   {stock: 'Apple', borrowingcost: 10},
//   {stock:'Google', borrowingcost: 12},
//   {stock:'Facebook', borrowingcost:14},
//   {stock:'Amazon', borrowingcost:11},
//   {stock: 'Netflix', borrowingcost: 7},
// ]

@Component({
  selector: 'app-overviewtable',
  templateUrl: './overviewtable.component.html',
  styleUrls: ['./overviewtable.component.css']
})
export class OverviewtableComponent implements OnInit{

  // dataSourceOne: MatTableDataSource<OpeningBalance>;
  displayedColumnsOne: string[] = ['clearingmember','apple','google','facebook','amazon','netflix' ];


  // dataSourceTwo: MatTableDataSource<InterestRates>;
  displayedColumnsTwo: string[] = ['stock', 'borrowingcost'];

  displayedColumnCashInterestCard: string[]= ['cashInterestRate'];
  displayedColumnTradeVolumeCard: string[]= ['tradeVolume'];


  // constructor() {
  //   this.dataSourceOne = new MatTableDataSource;
  //   this.dataSourceTwo = new MatTableDataSource;
  // }

  // ngOnInit() {
  //   // this.dataSourceOne.data = ELEMENT_DATA;
  //   // // this.dataSourceOne.paginator = this.tableOnePaginator;
  //   // // this.dataSourceOne.sort = this.tableOneSort;

  //   // this.dataSourceTwo.data = INTEREST_DATA;
  //   // // this.dataSourceTwo.paginator = this.tableTwoPaginator;
  //   // // this.dataSourceTwo.sort = this.tableTwoSort;
  // }
  public getBalance=[] //obs
  public getRates=[]
  public getCashRate=[]
  public getTradeVolume=[]
  public today= new Date()
  constructor(private _httpService: OverviewtableService) { }
  ngOnInit(): void {
    
    this._httpService.getOpeningBalance().subscribe(data => this.getBalance = data);
    this._httpService.getInterestRates().subscribe(data => this.getRates = data);
    this._httpService.getCashInterestRate().subscribe(data => this.getCashRate = data);
    this._httpService.getTradeVolume().subscribe(data => this.getTradeVolume = data);
    
  
}}
