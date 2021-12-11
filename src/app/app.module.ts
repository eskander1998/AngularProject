import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainCustomersComponent } from './components/main-customers/main-customers.component';
import { MainProductsComponent } from './components/main-products/main-products.component';
import { MainStockComponent } from './components/main-stock/main-stock.component';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { MainProvidersComponent } from './components/main-providers/main-providers.component';
import { MainInvoicesComponent } from './components/main-invoices/main-invoices.component';
import { CustomersFormComponent } from './components/main-customers/customers-form/customers-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateFormComponent } from './components/main-customers/update-form/update-form.component';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';
import { DetailClientComponent } from './components/main-customers/detail-client/detail-client.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { ProduitAcheteParClientComponent } from './components/main-customers/produit-achete-par-client/produit-achete-par-client.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    DashboardComponent,
    MainPageComponent,
    MainCustomersComponent,
    MainProductsComponent,
    MainStockComponent,
    MainShopComponent,
    MainProvidersComponent,
    MainInvoicesComponent,
    CustomersFormComponent,
    UpdateFormComponent,
    DetailClientComponent,
    ProduitAcheteParClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgApexchartsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
