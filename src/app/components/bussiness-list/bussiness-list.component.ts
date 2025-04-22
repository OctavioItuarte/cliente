import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Business } from '../../models/business';
import { RouterModule } from '@angular/router';
import { BusinessDataService } from '../../services/business-data/business-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bussiness-list',
  imports: [CartComponent, RouterModule],
  templateUrl: './bussiness-list.component.html',
  styleUrl: './bussiness-list.component.css'
})
export class BussinessListComponent implements OnInit{

  constructor(private businessDataService:BusinessDataService, private http:HttpClient){}

  businesses: Business[] = [];

  ngOnInit(): void {

      this.businessDataService.getBusiness().subscribe(response=>
        this.businesses=response
      );
  }
}