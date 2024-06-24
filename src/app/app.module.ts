import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GestionarVueloComponent } from './pages/gestionar-vuelo/gestionar-vuelo.component';
import { GestionarPasajeroComponent } from './pages/gestionar-pasajero/gestionar-pasajero.component';
import { GestionarReservaComponent } from './pages/gestionar-reserva/gestionar-reserva.component';
import { RegistrarVueloComponent } from './pages/gestionar-vuelo/registrar-vuelo/registrar-vuelo.component';
import { ModificarVueloComponent } from './pages/gestionar-vuelo/modificar-vuelo/modificar-vuelo.component';
import { ModificarReservaComponent } from './pages/gestionar-reserva/modificar-reserva/modificar-reserva.component';
import { RegistrarReservaComponent } from './pages/gestionar-reserva/registrar-reserva/registrar-reserva.component';
import { ModificarPasajeroComponent } from './pages/gestionar-pasajero/modificar-pasajero/modificar-pasajero.component';
import { RegistrarPasajeroComponent } from './pages/gestionar-pasajero/registrar-pasajero/registrar-pasajero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GestionarVueloComponent,
    GestionarPasajeroComponent,
    GestionarReservaComponent,
    RegistrarVueloComponent,
    ModificarVueloComponent,
    ModificarReservaComponent,
    RegistrarReservaComponent,
    ModificarPasajeroComponent,
    RegistrarPasajeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatExpansionModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule, 
    MatNativeDateModule,  
    MatStepperModule,
    ReactiveFormsModule, 
    MatDialogModule
  ],
  exports: [MatToolbarModule,MatButtonModule,MatIconModule,MatExpansionModule],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
