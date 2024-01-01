import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private apiUrl ='https://fakestoreapi.com/products';
private api='../../../assets/products.json';
  constructor(private http :HttpClient) { }
  getproduct():Observable<Apiproducts[]>{

return this.http.get<Apiproducts[]>(this.apiUrl);


  }
}
