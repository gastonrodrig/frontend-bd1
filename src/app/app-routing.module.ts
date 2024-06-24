import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarVueloComponent } from './pages/gestionar-vuelo/gestionar-vuelo.component';
import { GestionarPasajeroComponent } from './pages/gestionar-pasajero/gestionar-pasajero.component';
import { GestionarReservaComponent } from './pages/gestionar-reserva/gestionar-reserva.component';
import { ModificarVueloComponent } from './pages/gestionar-vuelo/modificar-vuelo/modificar-vuelo.component';
import { RegistrarVueloComponent } from './pages/gestionar-vuelo/registrar-vuelo/registrar-vuelo.component';
import { RegistrarReservaComponent } from './pages/gestionar-reserva/registrar-reserva/registrar-reserva.component';
import { ModificarReservaComponent } from './pages/gestionar-reserva/modificar-reserva/modificar-reserva.component';
import { RegistrarPasajeroComponent } from './pages/gestionar-pasajero/registrar-pasajero/registrar-pasajero.component';
import { ModificarPasajeroComponent } from './pages/gestionar-pasajero/modificar-pasajero/modificar-pasajero.component';


const routes: Routes = [
  {
    path: 'vuelo',
    component: GestionarVueloComponent,
    pathMatch: 'full'
  },
  {
    path: 'registrar-vuelo',
    component: RegistrarVueloComponent,
    pathMatch: 'full'
  },
  {
    path: 'actualizar-vuelo/:id_vuelo',
    component: ModificarVueloComponent,
    pathMatch: 'full'
  },
  {
    path: 'pasajero',
    component: GestionarPasajeroComponent,
    pathMatch: 'full'
  },
  {
    path: 'registrar-pasajero',
    component: RegistrarPasajeroComponent,
    pathMatch: 'full'
  },
  {
    path: 'actualizar-pasajero/:id_pasajero',
    component: ModificarPasajeroComponent,
    pathMatch: 'full'
  },
  {
    path: 'reserva',
    component: GestionarReservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'registrar-reserva',
    component: RegistrarReservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'actualizar-reserva/:id_reserva',
    component: ModificarReservaComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }