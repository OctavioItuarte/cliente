import { Component, inject, Input, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import { CommonModule, CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ProductDataService } from '../../services/product-data/product-data.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-create-products',
  imports: [CommonModule, CurrencyPipe, DatePipe, FormsModule],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})

export class CreateProductsComponent implements OnInit{

  constructor(private productDataService:ProductDataService, private http:HttpClient, private loginService: LoginService){}

  products_list: Product[] =[];
  ngOnInit(): void {
    const URL = "http://localhost:3000";
    var idBusiness = this.loginService.getIdBusiness();
    this.productDataService.getBusinessProducts(idBusiness).subscribe(response=> 
    this.products_list=response as Product[]);
  }
  
  new_product:Product={_id:"",_id_business:"",description:"", name:"",price:0,stock:0,image:"",last_change:new Date(),quantity:0};

  changed_product: Product={_id:"",_id_business:"",description:"", name:"",price:0,stock:0,image:"",last_change:new Date(),quantity:0};

  selectedRows: Set<number> = new Set();  // Almacenará los índices de las filas seleccionadas

  // Función para seleccionar o desmarcar una fila
  onSelectRow(event: any, index: number) {
    if (event.target.checked) {
      this.selectedRows.add(index);  // Agrega el índice al Set si la fila está seleccionada
    } else {
      this.selectedRows.delete(index);  // Elimina el índice si la fila no está seleccionada
    }
  }

  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.selectedRows = new Set(this.products_list.map((_, index) => index));  // Selecciona todas las filas
    } else {
      this.selectedRows.clear();  // Desmarca todas las filas
    }
  }

  // Función para eliminar las filas seleccionadas
  deleteSelected() {

    this.selectedRows.forEach((i)=>
      {
        var id=this.products_list[i]._id;
        this.productDataService.deleteBusinessProduct(id).subscribe(response=>console.log(response));
    });

    //this.products_list = this.products_list.filter((_, index) => !this.selectedRows.has(index));
    this.selectedRows.clear();  // Limpiar las filas seleccionadas después de eliminar
  }

  updatingProduct: string | null = null;
  
  activateEdit(product: Product){
    this.updatingProduct = product._id;
    this.changed_product = product;
    this.new_product = { ...product };
  }

  updateProduct(){
    // ------------------------ AGREGAR PETICION PARA ACTUALIZAR EL PRODUCTO
    var product= {...this.new_product};
    this.productDataService.putBusinessProduct(this.changed_product._id, JSON.stringify(product)).subscribe(response=>console.log(response));

    this.changed_product && (this.changed_product.name = this.new_product.name);
    this.changed_product && (this.changed_product.description = this.new_product.description);
    this.changed_product && (this.changed_product.price = this.new_product.price);
    this.changed_product && (this.changed_product.stock = this.new_product.stock);
    this.changed_product && (this.changed_product.image = this.new_product.image);

    this.changed_product = {_id:"",_id_business:"",description:"", name:"",price:0,stock:0,image:"",last_change:new Date(),quantity:0};

    this.updatingProduct = null;
  }

  addProduct(){
    // ------------------------ AGREGAR PETICION A LA API PARA AGREGAR EL PRODUCTO
    var product= {...this.new_product};

    const formData = new FormData();

    formData.append('name', this.new_product.name);
    formData.append('price', this.new_product.price.toString());
    formData.append('stock', this.new_product.stock.toString());
    formData.append('description', this.new_product.description);
    if (this.selectedImage) {
        formData.append('image', this.selectedImage); // "image" debe coincidir con multer.single('image')
    }
    this.productDataService.postBusinessProduct(formData)

    .subscribe(response => {
      console.log(response);
      product = response as Product;
      this.products_list.push(product);
    });
  }

  selectedImage: File | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.new_product.image = file.name; // Para mostrar el nombre si querés
    }
  }
}

