import { Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarproductosComponent } from './components/listarproductos/listarproductos.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

export const routes: Routes = [
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'listar-producto', component: ListarproductosComponent },
    { path: 'listar-usuarios', component: ListarUsuariosComponent }
    //{ path: '', component: Login },
    //{ path: '**',  redirectTo: '', pathMatch: 'full'}
];
