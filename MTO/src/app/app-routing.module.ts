import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from "./handbook_pages/categories/categories.component";
import { OsUsageComponent } from "./handbook_pages/os-usage/os-usage.component";

const routes: Routes = [
  // Handbook
  { path: 'OsCategories', component: CategoriesComponent },
  { path: 'OsUsage', component: OsUsageComponent },

  // Default route
  { path: '', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
