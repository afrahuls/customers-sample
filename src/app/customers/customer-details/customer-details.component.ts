import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: any;
  constructor(private route: ActivatedRoute, private customers: CustomersService) { }

  ngOnInit() {
    this.customer = this.customers.getCustomerById(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  updateCustomer(customer: any) {
    
  }

}
