import { Routes } from '@angular/router';
import { CreateProductsComponent } from './components/create-products/create-products.component';


export const routes: Routes = [
    { path: 'create-products', component: CreateProductsComponent }
    //{ path: '', component: Login },
    //{ path: '**',  redirectTo: '', pathMatch: 'full'}
];

