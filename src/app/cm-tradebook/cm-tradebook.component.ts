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

@Component({
  selector: 'app-cm-tradebook',
  templateUrl: './cm-tradebook.component.html',
  styleUrls: ['./cm-tradebook.component.css']
})
export class CmTradebookComponent implements OnInit {
  displayedColumns: string[] = ['tradeID', 'cmName', 'orderType','stockName', 'price', 'quantity','tradeValue'];
  public getData = []; 
  constructor(private _httpService: CmTradebookService ) { }
  ngOnInit(): void {
    this._httpService.getCmTradebook().subscribe(data => this.getData = data);
    // this.loginID = (this.activatedRoute.snapshot.params.cmid);
}


}
