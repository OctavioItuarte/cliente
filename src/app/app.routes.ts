import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BussinessListComponent } from './components/bussiness-list/bussiness-list.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '',  redirectTo: '/business-list', pathMatch: 'full'},
    {path: 'product-list', component: ProductListComponent},
    {path: 'business-list', component: BussinessListComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: NotFoundComponent}
];
