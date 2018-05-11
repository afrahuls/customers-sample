import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;
  customersList: any = [];

  constructor(private router: Router, private customerService: CustomersService) { }

  ngOnInit() {
    console.log('loading==========');
    this.customerService.getCustomersList()
      .subscribe(data => this.customersList = data,
        err => console.error(err),
        () => console.log('done loading foods'));
    // console.log('######### ', this.customersList);
  }

  addCustomer() {
    this.router.navigate(['customers/add-customer']);
  }

}
