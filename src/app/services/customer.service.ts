import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';
import { Facture } from '../models/Facture';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  list:Customer []= [];

  CustomersUrl:string='http://localhost:8081/SpringMVC/servlet';


  constructor(private _http:HttpClient) { }


  getAllCustomersFromDB():Observable<Customer[]>{
    return this._http.get<Customer[]>(this.CustomersUrl+"/retrieve-all-clients");
  }
  getCustomerByCategory(categorie:string):Observable<Customer[]>{
    return this._http.get<Customer[]>(this.CustomersUrl+"/retrieve-client-byCategorieClient/"+categorie);
  }
  getFactureByClient(id:string):Observable<Facture[]>{
    return this._http.get<Facture[]>(this.CustomersUrl+"/facture/"+id);
  }
  getCustomerByProfession(profession:string):Observable<Customer[]>{
    return this._http.get<Customer[]>(this.CustomersUrl+"/retrieve-client-byProfession/"+profession);
  }

  deleteCustomer (Customer: Customer | number): Observable<Customer> {
    const id = typeof Customer === 'number' ? Customer : Customer.idClient;
    const url=this.CustomersUrl+'/remove-client/'+id;
    return this._http.delete<Customer>(url);
    }


    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }
  
      
    addCustomer (Customer: Customer): Observable<Customer> {
    
  return this._http.post<Customer>(this.CustomersUrl+"/add-client", Customer, this.httpOptions);}



  getCustomerById(id: number): Observable<Customer> {
    return this._http.get<Customer>(this.CustomersUrl +'/retrieve-client/'+ id); }

    updateCustomer ( Customer: Customer): Observable<Customer> {
      return this._http.put<Customer>(this.CustomersUrl+'/modify-client', Customer, this.httpOptions);
      }

}
