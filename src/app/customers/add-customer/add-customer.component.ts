import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerName: string = '';
  description: string = '';
  constructor(private router: Router, private customerService: CustomersService) { }

  ngOnInit() {
  }

  addCustomer() {
    if (this.customerName.trim() === '' || this.description.trim() === '') {
      window.alert('Name and description are mandatory');
    } else {
      this.customerService.addCustomer({ name: this.customerName, description: this.description });
      this.router.navigate(['customers']);
    }
  }

}
