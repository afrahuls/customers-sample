import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customers: any;
  customer: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customers = new CustomersService();
    this.customer = this.customers.getCustomerById(this.route.snapshot.paramMap.get('id'));
  }

}
