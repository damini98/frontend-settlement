import { Component, OnInit } from '@angular/core';
export interface StockObligation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;
}

const ELEMENT_DATA: StockObligation[] = [
  {name: 'Citi', value1: 34, value2: 66,value3:89,value4:123,value5:78},
  {name: 'DB', value1: 34, value2: 66,value3:89,value4:123,value5:78},
  {name: 'Citi', value1: 34, value2: 66,value3:89,value4:123,value5:78},
  {name: 'Citi', value1: 34, value2: 66,value3:89,value4:123,value5:78},
  {name: 'Citi', value1: 34, value2: 66,value3:89,value4:123,value5:78},
  


];
@Component({
  selector: 'app-stockobligation',
  templateUrl: './stockobligation.component.html',
  styleUrls: ['./stockobligation.component.css']
})
export class StockobligationComponent implements OnInit {displayedColumns: string[] = [ 'name', 'value1', 'value2','value3','value4','value5'];
dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
