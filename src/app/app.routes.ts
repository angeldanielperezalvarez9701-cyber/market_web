import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
import { Layout } from './pages/layout/layout';
import { NuevaVenta } from './pages/nueva-venta/nueva-venta';
import { Productos } from './pages/productos/productos';
import { ControlProductos } from './pages/control-productos/control-productos';
import { Error } from './pages/error/error';

export const routes: Routes = [
    {
        path:'',component:Layout,
        children:[
            { path: 'ventas', component:Ventas},
            {path: 'nueva-venta', component:NuevaVenta},
            {path:'productos',component:Productos},
            {path: 'control-producto', component:ControlProductos},
            { path: 'error', component: Error },

        ]
       
    }
];
