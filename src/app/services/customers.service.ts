import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CustomersService {
  customerList: any;
  // customerList = [{ id: 1, name: 'John', description: 'Employee in a super store. Weekly buyer.' },
  // { id: 2, name: 'Steve', description: 'Manager in a super store. Daily buyer.' },
  // { id: 3, name: 'Mike', description: 'Employee in a super store. Twice in a week buyer.' },
  // { id: 4, name: 'Molly', description: 'Employee in a super store. Weekly buyer.' },
  // { id: 5, name: 'Jane', description: 'Assistant manager in a super store. Daily buyer.' }];

  constructor(private http: HttpClient) { }

  getCustomersList() {
    // this.customerList = this.http.get('http://192.168.4.213:9090/v3/customers?offset=0&limit=10&status=active');
    // console.log('============ ', this.customerList );

    return this.http.get('http://192.168.4.213:9090/v3/customers?offset=0&limit=10&status=active');
  }

  getCustomerById(id: number) {
    let i = 0;
    for (i = 0; i < this.customerList.length; i++) {
      if (id === this.customerList[i].id) {
        break;
      }
    }

    return this.customerList[i];
  }

  updateCustomer(customer: any) {
    let i = 0;
    for (i = 0; i < this.customerList.length; i++) {
      if (customer.id === i) {
        this.customerList[i] = customer;
        break;
      }
    }

    return this.customerList[i];
  }

  addCustomer(customer: any) {
    customer.id = this.customerList[this.customerList.length - 1].id + 1;
    this.customerList.push(customer);
    return customer;
  }

  deleteCustomer(id: number) {
    let i = 0;
    for (i = 0; i < this.customerList.length; i++) {
      if (id === i) {
        break;
      }
    }
    return this.customerList.splice(i, 1);
  }
}
