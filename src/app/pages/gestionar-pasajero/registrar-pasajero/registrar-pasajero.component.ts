import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PasajeroService } from 'src/app/services/pasajero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-pasajero',
  templateUrl: './registrar-pasajero.component.html',
  styleUrls: ['./registrar-pasajero.component.css']
})
export class RegistrarPasajeroComponent {

  pasajeroData = {
    nombre: '',
    pasaporte: '',
    fecha_nacimiento: ''
  }

  constructor(
    private snack: MatSnackBar,
    private pasajeroService: PasajeroService,
    private router: Router
  ) {}
  
  volverAPasajeros() {
    this.router.navigate(['/pasajero'])
  }

  guardarInformacion() {
    if (this.pasajeroData.nombre === '' || this.pasajeroData.nombre == null) {
      this.snack.open('El nombre es requerido', '', {
        duration: 3000
      });
      return;
    }

    if(this.pasajeroData.pasaporte === '' || this.pasajeroData.pasaporte == null) {
      this.snack.open('El pasaporte es requerido', '', {
        duration: 3000
      });
      return;
    }
  
    if (this.pasajeroData.fecha_nacimiento === '' || this.pasajeroData.fecha_nacimiento == null) {
      this.snack.open('La fecha de nacimiento es requerida', '', {
        duration: 3000
      });
      return;
    }

    this.pasajeroService.agregarPasajero(this.pasajeroData).subscribe(
      (data) => {
        Swal.fire('Pasajero guardado', 'El pasajero ha sido guardado con éxito', 'success')
        this.pasajeroData = {
          nombre: '',
          pasaporte: '',
          fecha_nacimiento: ''
        }
        this.router.navigate(['/pasajero'])
      },
      (error) => {
        Swal.fire('Error', 'Error al guardar la información del pasajero', 'error')
      }
    );
  }

}
