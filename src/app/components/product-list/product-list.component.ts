import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';
import { CartComponent } from '../cart/cart.component';
import { ProductDataService } from '../../services/product-data/product-data.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CartComponent, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
  products: Product[] = [];

  constructor(private cart: CartService, private productDataService:ProductDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    var idBusiness: string;
    this.route.params.subscribe(response=>
      {
        console.log(response);
        idBusiness=response["idBusiness"];
        console.log(idBusiness);
        this.productDataService.getBusinessProducts(idBusiness)
        .subscribe(response=>
          {
            this.products=response;
            this.products.forEach(product => product.quantity=0);
          });
      });
  }

  addToCart(product:Product): void{
    this.cart.addToCart(product);
  }

  upQuantity(product: Product): void{
    if (product.quantity < product.stock)
      product.quantity++;
  }

  downQuantity(product: Product): void{
    if (product.quantity > 0)
      product.quantity--;
  }

  changeQuantity(event: KeyboardEvent, product:Product): void{
    console.log(event.target);
  }

}
