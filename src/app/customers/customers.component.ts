import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;
  customersList: any = [];

  constructor() { }

  ngOnInit() {
    this.customers = new CustomersService();
    this.customersList = this.customers.getCustomersList();
    console.log("customers list ===== ",this.customersList);
    
  }

}
