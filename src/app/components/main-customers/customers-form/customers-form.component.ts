import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {

  Customer: Customer  = new Customer();
  myForm : FormGroup;


  constructor(private CustomerService: CustomerService,  private router: Router) { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      idClient : new FormControl('',[Validators.required]),
      nom : new FormControl('',[Validators.required]),
      prenom : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      dateNaissance : new FormControl('',[Validators.required]),
      profession : new FormControl('',[Validators.required]),
      categorieClient : new FormControl('',[Validators.required]),
      
      })
  }

  
  
  get myNom(){
    return this.myForm.get('nom');
  }
  get myPrenom(){
    return this.myForm.get('prenom');
  }
  get myEmail(){
    return this.myForm.get('email');
  }

  get mydateNaissance(){
    return this.myForm.get('dateNaissance');
  }

  get mycategorieClient(){
    return this.myForm.get('categorieClient');
  }
  get myProfession(){
    return this.myForm.get('profession');
  }
  saveCustomer(){
    this.CustomerService.addCustomer(this.myForm.getRawValue()).subscribe(data => {
     console.log(data);
     this.goToMainPage();
    });
  }

    goToMainPage(){
      this.router.navigate(['/customers']);
    }

    onSubmit(){
    console.log(this.Customer);
    this.saveCustomer();
    }


}