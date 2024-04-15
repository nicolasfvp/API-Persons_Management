import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl = 'http://localhost:3000/api/persons';

  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get(this.apiUrl);
  }

  getPersonsByCpf(cpf : string): Observable<any> {
    const url = `${this.apiUrl}?cpf=${cpf}`;

    return this.http.get<any>(url);
  }

  postPerson(person: any) {
    return this.http.post(this.apiUrl, person);
  }

  putPerson(id: string, person: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, person);
  }

  deletePerson(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  postAddress(id: string, addresses: any){
    const url = `${this.apiUrl}/${id}/addresses`;
    return this.http.post(url, addresses);
  }

  putAddress(id: string, addresses: any, addressId: any){
    const url = `${this.apiUrl}/${id}/addresses/${addressId}`;
    return this.http.put(url, addresses);
  }

  deleteAddress(id: string, addresses: any, addressId: any){
    const url = `${this.apiUrl}/${id}/addresses/${addressId}`;
    return this.http.delete(url, addresses);
  }
}