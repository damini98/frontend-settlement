import { Component, OnInit } from '@angular/core';
export interface StockObligation {
  name: string;
  google: number; //TODO:apple
  amazon: number;
  apple: number;
  netflix: number;
  facebook: number;
}

const ELEMENT_DATA: StockObligation[] = [
  {name: 'Citi', google: 34, amazon: 66,apple:89,netflix:123,facebook:78},
  {name: 'DB', google: 34, amazon: 66,apple:89,netflix:123,facebook:78},
  {name: 'Citi', google: 34, amazon: 66,apple:89,netflix:123,facebook:78},
  {name: 'Citi', google: 34, amazon: 66,apple:89,netflix:123,facebook:78},
  {name: 'Citi', google: 34, amazon: 66,apple:89,netflix:123,facebook:78},
  


];
@Component({
  selector: 'app-stockobligation',
  templateUrl: './stockobligation.component.html',
  styleUrls: ['./stockobligation.component.css']
})
export class StockobligationComponent implements OnInit {displayedColumns: string[] = [ 'name', 'google', 'amazon','apple','netflix','facebook'];
dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
