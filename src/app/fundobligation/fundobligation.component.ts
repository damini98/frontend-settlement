import { Component, OnInit } from '@angular/core';
import { FundserviceService } from './fundservice.service';

export interface FundObligation {
  name: string;
  value1: number;

}

// const ELEMENT_DATA: FundObligation[] = [
//   {name: 'Citi', value1: 34},
//   {name: 'DB', value1: 56},
//   {name: 'JPMC', value1: 94},
//   {name: 'MS', value1: 47},
//   {name: 'GS', value1: 30},

//   {
//     "Deutsche Bank": 7000,
//     "JP Morgan": 1000,
//     "Citi": -8000,
//     "Goldman Sachs": 0,
//     "Morgan Stanley": 0
// }
//];

@Component({
  selector: 'app-fundobligation',
  templateUrl: './fundobligation.component.html',
  styleUrls: ['./fundobligation.component.css']
})
export class FundobligationComponent implements OnInit {
  displayedColumns: string[] = ['name', 'value1'];
  // dataSource = ELEMENT_DATA;

  public getData = []; //obs
  constructor(private _httpService: FundserviceService) { }


  ngOnInit(): void {
    this._httpService.getFund().subscribe(data => this.getData = data);
  }

  //  console.log(res);
  //this.logger.debug(res);


}
