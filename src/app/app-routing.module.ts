import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainCustomersComponent } from './components/main-customers/main-customers.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainProductsComponent } from './components/main-products/main-products.component';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { MainStockComponent } from './components/main-stock/main-stock.component';
import { MainProvidersComponent } from './components/main-providers/main-providers.component';
import { MainInvoicesComponent } from './components/main-invoices/main-invoices.component';
import { CustomersFormComponent } from './components/main-customers/customers-form/customers-form.component';
import { UpdateFormComponent } from './components/main-customers/update-form/update-form.component';
import { DetailClientComponent } from './components/main-customers/detail-client/detail-client.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'customers', component: MainCustomersComponent },
    {path: 'customers/:idclient', component: DetailClientComponent },
    {path: 'addcustomer', component: CustomersFormComponent},
    {path: 'updatecustomer"', component: UpdateFormComponent},
    {path: 'products', component: MainProductsComponent},
    {path: 'stock', component: MainStockComponent},
    {path: 'shop', component: MainShopComponent},
    {path: 'providers', component: MainProvidersComponent},
    {path: 'invoices', component: MainInvoicesComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
  ]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
