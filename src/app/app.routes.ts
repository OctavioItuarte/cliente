import { Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarElementoComponent } from './components/listar-elemento/listar-elemento.component';

export const routes: Routes = [
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'listar-elemento', component: ListarElementoComponent }
    //{ path: '', component: Login },
    //{ path: '**',  redirectTo: '', pathMatch: 'full'}
];
