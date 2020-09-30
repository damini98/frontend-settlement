import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CostSettlementReportComponent } from './cost-settlement-report/cost-settlement-report.component';
import { CorporateActionComponent } from './corporate-action/corporate-action.component';
import { MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
//import {MatFormModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OverviewtableComponent } from './overviewtable/overviewtable.component';
import { MatTableModule } from '@angular/material/table';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StockobligationComponent } from './stockobligation/stockobligation.component';
import { FundobligationComponent } from './fundobligation/fundobligation.component';
import { HttpClientModule} from '@angular/common/http';
import { CmObligationComponent } from './cm-obligation/cm-obligation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CostSettlementReportComponent,
    CorporateActionComponent,
    StockobligationComponent,
    FundobligationComponent,
    OverviewtableComponent,
    LoginComponent,
    CmObligationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
