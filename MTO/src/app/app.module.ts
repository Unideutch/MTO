import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Handbook pages
import { OsUsageComponent } from './handbook_pages/os-usage/os-usage.component';
import { CategoriesComponent } from './handbook_pages/categories/categories.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpeViewComponent } from './simpe-view/simpe-view.component';
import { FullViewComponent } from './full-view/full-view.component';
import { TypesComponent } from './types/types.component';
import { AccessComponent } from './access/access.component';
import { UsageComponent } from './usage/usage.component';
import { AccountsComponent } from './accounts/accounts.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { AddMTOComponent } from './add-mto/add-mto.component';
import { EditingMTOComponent } from './editing-mto/editing-mto.component';
import { EditingMTOC1Component } from './editing-mto-c1/editing-mto-c1.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SimpeViewComponent,
    FullViewComponent,
    TypesComponent,
    AccessComponent,
    UsageComponent,
    AccountsComponent,
    BudgetsComponent,
    RecommendationsComponent,
    AddMTOComponent,
    EditingMTOComponent,
    EditingMTOC1Component,
    OsUsageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
