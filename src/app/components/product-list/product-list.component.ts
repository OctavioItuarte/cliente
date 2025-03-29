import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  imports: [CartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      _id: '1',
      name:'Heineken',
      price: 100,
      description: 'Muy buena la holandesa',
      stock: 3,
      quantity:0,
      img:"assets/img/productoSinImagen.jpeg"
    },
    {
      _id: '2',
      name:'Stella Artois',
      price: 120,
      description: 'Muy buena la belga',
      stock: 5,
      quantity:0,
      img:"assets/img/productoSinImagen.jpeg"
    },
    {
      _id: '3',
      name:'Quilmes',
      price: 120,
      description: 'Muy buena la argentina',
      stock: 0,
      quantity:0,
      img:"assets/img/productoSinImagen.jpeg"
    }
  ]


  constructor(private cart: CartService) {  
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
