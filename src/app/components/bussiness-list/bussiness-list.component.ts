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
    }
  ]
}


