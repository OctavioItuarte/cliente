import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(product: Product){
    let item: Product | undefined = this._cartList.find((v1) => v1.name == product.name);

    if(!item){
      // Si el producto no está en el carrito, verifica si hay suficiente stock
      if (product.quantity <= product.stock){
        this._cartList.push({... product});
        product.stock -= product.quantity;
      } else{
        alert('No hay suficiente stock para agregar este producto al carrito.');
        return; // No agregar el producto si no hay suficiente stock
      }
    } else {
      // Si el producto ya está en el carrito, verifica si la cantidad total no supera el stock
      const totalQuantity = item.quantity + product.quantity;
      if (totalQuantity <= product.stock) {
        item.quantity = totalQuantity;
        product.stock -= product.quantity;
      } else {
        alert('No hay suficiente stock para agregar más unidades de este producto.');
        return; // No agregar más unidades si no hay suficiente stock
      }
    }
    this.cartList.next(this._cartList)
  }
}
