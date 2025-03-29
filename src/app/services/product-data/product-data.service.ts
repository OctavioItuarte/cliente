import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';

const URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getBusinessProducts(idBusiness: string): Observable<Product[]>{

    return this.http.get<Product[]>(`${URL}/products/${idBusiness}`);
  }

  postBusinessProduct(product:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${URL}/products`, product, {headers,withCredentials:true});
  }

  //putBusinessProducts(idProduct: string, bodyUpdate: string){}

  deleteBusinessProduct(idProduct: string){
    return this.http.delete(`${URL}/products/${idProduct}`, {withCredentials:true});
  }
}
