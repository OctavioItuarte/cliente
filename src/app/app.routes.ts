import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BussinessListComponent } from './components/bussiness-list/bussiness-list.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import {LoginComponent} from './components/login/login.component'
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';


export const routes: Routes = [
    {path: '',  redirectTo: '/login', pathMatch: 'full'},
    {path: 'create-products', component: CreateProductsComponent, canActivate: [authGuard, roleGuard(['business'])]},
    {path: 'product-list/:idBusiness', component: ProductListComponent, canActivate: [authGuard, roleGuard(['client'])]},
    {path: 'business-list', component: BussinessListComponent, canActivate: [authGuard, roleGuard(['client'])]},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', component: NotFoundComponent}
]