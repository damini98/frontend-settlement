import { Component, OnInit } from '@angular/core';
export interface FundObligation {
  name: string;
  value1: number;
  
}

const ELEMENT_DATA: FundObligation[] = [
  {name: 'Citi', value1: 34},
  {name: 'DB', value1: 56},
  {name: 'JPMC', value1: 94},
  {name: 'MS', value1: 47},
  {name: 'GS', value1: 30},
  


];

@Component({
  selector: 'app-fundobligation',
  templateUrl: './fundobligation.component.html',
  styleUrls: ['./fundobligation.component.css']
})
export class FundobligationComponent implements OnInit {displayedColumns: string[] = [ 'name', 'value1'];
dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
