import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';
import { CartComponent } from '../cart/cart.component';
import { ProductDataService } from '../../services/product-data/product-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  /*
    {
      _id: '1',
      _id_business: '3',
      name:'Heineken',
      price: 100,
      description: 'Muy buena la holandesa',
      stock: 3,
      quantity:0,
      image:"assets/img/productoSinImagen.jpeg",
      last_change:new Date()
    },
    {
      _id: '2',
      _id_business: '3',
      name:'Stella Artois',
      price: 120,
      description: 'Muy buena la belga',
      stock: 5,
      quantity:0,
      image:"assets/img/productoSinImagen.jpeg",
      last_change:new Date()
    },
    {
      _id: '3',
      _id_business: '3',
      name:'Quilmes',
      price: 120,
      description: 'Muy buena la argentina',
      stock: 0,
      quantity:0,
      image:"assets/img/productoSinImagen.jpeg",
      last_change:new Date()
    }
  ]*/


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
