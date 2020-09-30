import { Component, OnInit } from '@angular/core';
import { CorporateActionServiceService } from './corporate-action-service.service';

export interface CorporateAction {
  name: string;
  apple: number;
  google: number;
  facebook:number;
  amazon:number;
  netflix: number;

}

@Component({
  selector: 'app-corporate-action',
  templateUrl: './corporate-action.component.html',
  styleUrls: ['./corporate-action.component.css']
})
export class CorporateActionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'apple','google','facebook','amazon','netflix'];
  public getData =[];//obs
  
  constructor(private _httpService: CorporateActionServiceService) { }

  ngOnInit(): void {
    this._httpService.getCorporateAction().subscribe(data => this.getData =data);
  }
}

