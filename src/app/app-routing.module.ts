import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductsComponent } from './products/products.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  // { path: 'products', component: ProductsComponent }
]

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
