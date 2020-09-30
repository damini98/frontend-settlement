import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostSettlementReportComponent } from './cost-settlement-report/cost-settlement-report.component';
import { FundobligationComponent } from './fundobligation/fundobligation.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewtableComponent } from './overviewtable/overviewtable.component';
import { StockobligationComponent } from './stockobligation/stockobligation.component';
import { TradebookComponent } from './tradebook/tradebook.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'overview',
  component: OverviewtableComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'tradebook',
  component: TradebookComponent
  //TODO
}, {
  path: 'stockOb',
  component: StockobligationComponent
}, {
  path: 'fundOb',
  component: FundobligationComponent
}, {
  path: 'csreport',
  component: CostSettlementReportComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
