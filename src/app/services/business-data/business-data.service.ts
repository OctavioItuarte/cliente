import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business } from '../../models/business';

const URL="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class BusinessDataService {

    constructor(private http: HttpClient) { }
  
    getBusiness(): Observable<Business[]>{
      return this.http.get<Business[]>(`${URL}/business`, {withCredentials:true});
    }
  
    postBusiness(business:any){
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(`${URL}/business`, business, {headers,withCredentials:true});
    }
  
    putBusiness(idBusiness: string, bodyUpdate: any){
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put(`${URL}/business/${idBusiness}`, bodyUpdate, {headers,withCredentials:true});
    }
  
    deleteBusiness(idBusiness: any){
      return this.http.delete(`${URL}/business/${idBusiness}`, {withCredentials:true});
    }
}
