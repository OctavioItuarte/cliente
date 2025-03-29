import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Business } from '../../models/business';

@Component({
  selector: 'app-bussiness-list',
  imports: [CartComponent],
  templateUrl: './bussiness-list.component.html',
  styleUrl: './bussiness-list.component.css'
})
export class BussinessListComponent {
  businesses: Business[] = [
    {
     _id: '8',
      e_mail: 'panaderia_el_trigo@example.com',
     name: 'Panadería El Trigo',
     password: 'hashed_password_123',
     address: 'Av. Siempre Viva 123, Buenos Aires',
     phone_number: '+54 9 11 1234-5678',
     category: 'Panadería',
     approve: true,
     entry_date: new Date(),
    },
    {
      _id: '9',
      e_mail: 'carniceria_tomas@example.com',
     name: 'Carniceria Tomas',
     password: 'hashed_password_143',
     address: 'Av. 9 de julio 738, Buenos Aires',
     phone_number: '+54 9 11 1234-5678',
     category: 'Carniceria',
     approve: true,
     entry_date: new Date(),
    },
    {
      _id: '10',
      e_mail: 'roma_mates@example.com',
     name: 'Roma Mates',
     password: 'hashed_password_122',
     address: 'Av. de los mates 564, Buenos Aires',
     phone_number: '+54 9 11 1234-5678',
     category: 'Mates',
     approve: true,
     entry_date: new Date(),
    }
  ]
}


