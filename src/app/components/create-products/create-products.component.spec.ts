import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/components/cart/cart.component.spec.ts
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
=======
import { CreateProductsComponent } from './create-products.component';

describe('CreateProductsComponent', () => {
  let component: CreateProductsComponent;
  let fixture: ComponentFixture<CreateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductsComponent);
>>>>>>> 2643a308cdddf125561e9b8a9273251096171217:src/app/components/create-products/create-products.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
