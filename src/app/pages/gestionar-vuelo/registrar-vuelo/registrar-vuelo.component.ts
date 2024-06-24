import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VueloService } from 'src/app/services/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-vuelo',
  templateUrl: './registrar-vuelo.component.html',
  styleUrls: ['./registrar-vuelo.component.css']
})
export class RegistrarVueloComponent {

  vueloData = {
    destino: '',
    fecha: ''
  }

  readonly minDate: Date = new Date(new Date().getFullYear() - 20, 0, 1);

  constructor(
    private snack: MatSnackBar,
    private vueloService: VueloService,
    private router: Router
  ) {}
  
  volverAVuelos() {
    this.router.navigate(['/vuelo'])
  }

  guardarInformacion() {
    if (this.vueloData.destino === '' || this.vueloData.destino == null) {
      this.snack.open('El destino es requerido', '', {
        duration: 3000
      });
      return;
    }
  
    if (this.vueloData.fecha === '' || this.vueloData.fecha == null) {
      this.snack.open('La fecha es requerida', '', {
        duration: 3000
      });
      return;
    }

    this.vueloService.agregarVuelo(this.vueloData).subscribe(
      (data) => {
        Swal.fire('Vuelo guardado', 'El vuelo ha sido guardado con éxito', 'success')
        this.vueloData = {
          destino : '',
          fecha : ''
        }
        this.router.navigate(['/vuelo'])
      },
      (error) => {
        Swal.fire('Error', 'Error al guardar la información del vuelo', 'error')
      }
    );
  }

}
