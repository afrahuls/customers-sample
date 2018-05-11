import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomersService } from './services/customers.service';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ModifyCustomerComponent } from './customers/modify-customer/modify-customer.component';

const appRoutes: Routes = [
  { path: 'customers', component: CustomersComponent },
  {
    path: 'customers/customer-details/:id', component: CustomerDetailsComponent,
    data: { title: 'Customers' }
  },
  { path: 'customers/add-customer', component: AddCustomerComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    PageNotFoundComponent,
    AddCustomerComponent,
    ModifyCustomerComponent
  ],
  // enableTracing: true for debugging purpose and to see navigation lifecycle
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
