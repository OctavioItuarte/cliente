import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BussinessListComponent } from './components/bussiness-list/bussiness-list.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import {LoginComponent} from './components/login/login.component'
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {path: '',  redirectTo: '/business-list', pathMatch: 'full'},
    {path: 'create-products', component: CreateProductsComponent},
    {path: 'product-list/:idBusiness', component: ProductListComponent},
    {path: 'business-list', component: BussinessListComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', component: NotFoundComponent}
]