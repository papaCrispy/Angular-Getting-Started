import { Component, OnInit } from '@angular/core';
import { ICustomer } from './ICustomer';
import { Customer } from './Customer';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpService } from '../shared/Services/http-service';

@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: ICustomer = new Customer()
  customerForm: FormGroup;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) {
    this.customerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      sendCatalog: ''
    });
  }

  ngOnInit(): void {
    this.populateTestData();

  }

  private populateTestData(): void{
    this.customerForm.setValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      email: 'jack@torchwood.com',
      sendCatalog: true
    })
  }

  save(): void{
    console.log(this.customerForm);
    this.customer.firstName = this.customerForm.get('firstName')?.value;
    this.httpService.sendData(this.customer).subscribe({
      next: (result) => console.log(`success! : ${JSON.stringify(result)}`),
      error: (error) => console.log(error),
    });
  }

}
