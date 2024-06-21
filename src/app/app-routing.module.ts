import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarVueloComponent } from './pages/gestionar-vuelo/gestionar-vuelo.component';
import { GestionarPasajeroComponent } from './pages/gestionar-pasajero/gestionar-pasajero.component';
import { GestionarReservaComponent } from './pages/gestionar-reserva/gestionar-reserva.component';
import { ModificarVueloComponent } from './pages/gestionar-vuelo/modificar-vuelo/modificar-vuelo.component';
import { RegistrarVueloComponent } from './pages/gestionar-vuelo/registrar-vuelo/registrar-vuelo.component';


const routes: Routes = [
  {
    path: 'vuelo',
    component: GestionarVueloComponent,
    pathMatch: 'full'
  },
  {
    path: 'registrarvuelo',
    component: RegistrarVueloComponent,
    pathMatch: 'full'
  },
  {
    path: 'actualizarvuelo/:id_vuelo',
    component: ModificarVueloComponent,
    pathMatch: 'full'
  },
  {
    path: 'pasajero',
    component: GestionarPasajeroComponent,
    pathMatch: 'full'
  },
  {
    path: 'reserva',
    component: GestionarReservaComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }