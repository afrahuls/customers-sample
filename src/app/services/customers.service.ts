import { Injectable } from '@angular/core';

@Injectable()
export class CustomersService {
  customerList = [{ id: 1, name: 'John', description: 'Employee in a super store. Weekly buyer.' },
  { id: 2, name: 'Steve', description: 'Manager in a super store. Daily buyer.' },
  { id: 3, name: 'Mike', description: 'Employee in a super store. Twice in a week buyer.' },
  { id: 4, name: 'Molly', description: 'Employee in a super store. Weekly buyer.' },
  { id: 5, name: 'Jane', description: 'Assistant manager in a super store. Daily buyer.' }];

  constructor() { }

  getCustomersList() {
    return this.customerList;
  }

  getCustomerById(id: number) {
    return this.customerList[id - 1];
  }

  updateCustomer(customer: any) {

  }

  addCustomer(customer: any) {

  }

  deleteCustomer(id: number) {

  }
}
