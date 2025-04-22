import { Component} from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartList$: Observable<Product[]>;
  total$: Observable<number>;

  constructor(private cart: CartService){
    this.cartList$ = cart.cartList.asObservable();
    this.total$ = cart.total$;
  }

  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.quantity = 0;
  }

  checkout(): void {
    this.cartList$.pipe(take(1)).subscribe(cart => {
      this.cart.checkout(cart).subscribe({
        next: (res) => {
          alert(res.message);
          this.cart.clearCart();
          this.cart.emitCheckoutDone();
        },
        error: (err) => {
          alert('Error: ' + err.error.message);
        }
      });
    });
  }
}
