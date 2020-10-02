import { Component, OnInit } from '@angular/core';
import { StockobpostcaService } from './stockobpostca.service';

export interface StockObPostCA{
  name: string;
  google: number;
  amazon: number;
  apple: number;
  netflix: number;
  facebook: number;}

@Component({
  selector: 'app-stockobpostca',
  templateUrl: './stockobpostca.component.html',
  styleUrls: ['./stockobpostca.component.css']
})
export class StockobpostcaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'google','amazon','apple','netflix','facebook'];

public getData=[]
constructor(private _httpService: StockobpostcaService) { }
ngOnInit(): void {
  this._httpService.getStock().subscribe(data => this.getData = data);
}
}