import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);

  private checkoutDoneSource = new Subject<void>();
  checkoutDone$ = this.checkoutDoneSource.asObservable();

  total$: Observable<number>;

  constructor(private http: HttpClient) {
    this.total$ = this.cartList.pipe(map(products => this.getTotalPrice(products))
  );}

  private getTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

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
      const totalQuantity = product.quantity;
      if (totalQuantity <= product.stock) {
        item.quantity = totalQuantity + item.quantity;
        product.stock -= product.quantity;
      } else {
        alert('No hay suficiente stock para agregar más unidades de este producto.');
        return; // No agregar más unidades si no hay suficiente stock
      }
    }
    this.cartList.next(this._cartList)
  }

  checkout(cart: Product[]): Observable<any> {
    return this.http.post('http://localhost:3000/productCheckout', { cart }, { withCredentials: true });
  }

  emitCheckoutDone() {
    this.checkoutDoneSource.next();
  }

  clearCart(): void {
    this._cartList = []; 
    this.cartList.next(this._cartList);
  }
}
