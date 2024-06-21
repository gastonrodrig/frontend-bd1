import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { ViewProductoComponent } from './pages/admin/view-producto/view-producto.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { DetalleProductoComponent } from './pages/admin/detalle-producto/detalle-producto.component';
import { ActualizarProductoComponent } from './pages/admin/actualizar-producto/actualizar-producto.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';	
import { ListaProductosComponent } from './pages/catalogo/lista-productos/lista-productos.component';
import { ViewCategoriaComponent } from './pages/admin/view-categoria/view-categoria.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';	
import { ActualizarCategoriaComponent } from './pages/admin/actualizar-categoria/actualizar-categoria.component';
import { ViewUsuarioComponent } from './pages/admin/view-usuario/view-usuario.component';
import { DetalleProductoCatalogoComponent } from './pages/catalogo/detalle-producto/detalle-producto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ViewCatalogoComponent } from './pages/admin/view-catalogo/view-catalogo.component';
import { ViewInventarioComponent } from './pages/admin/view-inventario/view-inventario.component';
import { AddToCatalogoComponent } from './pages/admin/add-to-catalogo/add-to-catalogo.component';
import { EnvioComponent } from './pages/envio/envio.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserHistoryOrderComponent } from './pages/user/user-history-order/user-history-order.component';
import { UserOrderDetailsComponent } from './pages/user/user-order-details/user-order-details.component';
import { UserAddressesComponent } from './pages/user/user-addresses/user-addresses.component';
import { UserAddAddressesComponent } from './pages/user/user-add-addresses/user-add-addresses.component';
import { AddStockComponent } from './pages/admin/add-stock/add-stock.component';
import { ViewPedidosComponent } from './pages/admin/view-pedidos/view-pedidos.component';
import { ActualizarEstadoPedidoComponent } from './pages/admin/actualizar-estado-pedido/actualizar-estado-pedido.component';
import { ActualizarCatalogoProductoComponent } from './pages/admin/actualizar-catalogo-producto/actualizar-catalogo-producto.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component: ListaProductosComponent,
    pathMatch: 'full'
  },
  {
    path: 'detalleproducto/:productoId', 
    component: DetalleProductoCatalogoComponent,
    pathMatch: 'full'
  },
  {
    path: 'nosotros', 
    component: NosotrosComponent,
    pathMatch: 'full'
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    pathMatch: 'full'
  },
  {
    path: 'envio',
    component: EnvioComponent,
    pathMatch: 'full'
  },
  {//admin/route
    path: 'admin',
    component: DashboardComponent,

    canActivate: [AdminGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'productos',
        component: ViewProductoComponent,
      },
      {
        path: 'addproducto',
        component:AddProductoComponent
      },
      {
        path: 'detalleproducto/:productoId',
        component: DetalleProductoComponent
      },
      {
        path: 'actualizarproducto/:productoId',
        component: ActualizarProductoComponent
      },
      {
        path: 'categorias',
        component: ViewCategoriaComponent,
      },
      {
        path: 'addcategoria',
        component: AddCategoriaComponent
      },
      {
        path: 'actualizarcategoria/:categoriaId',
        component: ActualizarCategoriaComponent
      },
      {
        path: 'usuarios',
        component: ViewUsuarioComponent
      },
      {
        path: 'inventario',
        component: ViewInventarioComponent
      },
      {
        path: 'catalogo',
        component: ViewCatalogoComponent
      },
      {
        path: 'addtocatalogo',
        component: AddToCatalogoComponent
      },
      {
        path: 'actualizarcatalogo/:catalogoId',
        component: ActualizarCatalogoProductoComponent
      },
      {
        path: 'agregar-stock/:productoId',
        component: AddStockComponent
      },
      {
        path: 'pedidos',
        component: ViewPedidosComponent
      },
      {
        path: 'detalle-pedido/:orderId',
        component: UserOrderDetailsComponent
      },
      {
        path: 'actualizar-pedido/:orderId',
        component: ActualizarEstadoPedidoComponent
      }
    ]
  },
  {//user/profile
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: '',
        component: UserWelcomeComponent
      },
      {
        path: 'perfil',
        component: UserProfileComponent
      },
      {
        path: 'historial-de-pedidos',
        component: UserHistoryOrderComponent
      },
      {
        path: 'detalle-pedido/:orderId',
        component: UserOrderDetailsComponent
      },
      {
        path: 'direcciones',
        component: UserAddressesComponent
      },
      {
        path: 'agregar-direccion',
        component: UserAddAddressesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }