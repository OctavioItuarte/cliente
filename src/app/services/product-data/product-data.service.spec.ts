import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/services/cart.service.spec.ts
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
=======
import { ProductDataService } from './product-data.service';

describe('ProductDataService', () => {
  let service: ProductDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDataService);
>>>>>>> 2643a308cdddf125561e9b8a9273251096171217:src/app/services/product-data/product-data.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
