import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public loginID ;
  public getData = []; 
  constructor(private _httpService: CmTradebookService, private activatedRoute: ActivatedRoute ) { }
  ngOnInit(): void {
    this._httpService.getCmTradebook().subscribe(data => this.getData = data);
    this.loginID = 3;
    // this.loginID = (this.activatedRoute.snapshot.params.cmid);
}


}
