import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Business } from '../../models/business';
import { RouterModule } from '@angular/router';
import { ProductDataService } from '../../services/product-data/product-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bussiness-list',
  imports: [CartComponent, RouterModule],
  templateUrl: './bussiness-list.component.html',
  styleUrl: './bussiness-list.component.css'
})
export class BussinessListComponent implements OnInit{

  constructor(private productDataService:ProductDataService, private http:HttpClient){}

  businesses: Business[] = [];/*
  [
    {
     _id: '8',
     email: 'panaderia_el_trigo@example.com',
     cuit: '12454564',
     name: 'Panadería El Trigo',
     address: 'Av. Siempre Viva 123, Buenos Aires',
     phoneNumber: '+54 9 11 1234-5678',
     category: 'Panadería',
     registration_date: new Date()
    },
    {
      _id: '9',
      email: 'carniceria_tomas@example.com',
      cuit: '12454564',
     name: 'Carniceria Tomas',
     address: 'Av. 9 de julio 738, Buenos Aires',
     phoneNumber: '+54 9 11 1234-5678',
     category: 'Carniceria',
     registration_date: new Date(),
    },
    {
      _id: '10',
      email: 'roma_mates@example.com',
     name: 'Roma Mates',
     cuit: '12454564',
     address: 'Av. de los mates 564, Buenos Aires',
     phoneNumber: '+54 9 11 1234-5678',
     category: 'Mates',
     registration_date: new Date(),
    },
    {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panadería El Trigo',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     },
     {
      _id: '8',
      email: 'panaderia_el_trigo@example.com',
      cuit: '12454564',
      name: 'Panaderíaaaaaaaaaaaa',
      address: 'Av. Siempre Viva 123, Buenos Aires',
      phoneNumber: '+54 9 11 1234-5678',
      category: 'Panadería',
      registration_date: new Date()
     }
  ];*/

  ngOnInit(): void {
      const URL="http://localhost:3000";

      this.http.post(`${URL}/login/password`, {"username":"julian@gmail.com", "password":"julian"}, { withCredentials: true })
          .subscribe(response =>{
            console.log("Response completa:", response);
            this.http.get<Business[]>(`${URL}/business`, { withCredentials: true })
            .subscribe(
            response => {
              this.businesses = response;
              console.log("Response completa:", response);
            });
          });
  }

}


