import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeroService } from 'src/app/services/pasajero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-pasajero',
  templateUrl: './modificar-pasajero.component.html',
  styleUrls: ['./modificar-pasajero.component.css']
})
export class ModificarPasajeroComponent {

  pasajeroId = 0;
  pasajero: any;
  pasajeroOriginal: any;

  constructor(
    private snack: MatSnackBar,
    private route: ActivatedRoute,
    private pasajeroService: PasajeroService,
    private router: Router) { }

  ngOnInit(): void {
    this.pasajeroId = this.route.snapshot.params['id_pasajero'];
    this.pasajeroService.obtenerPasajero(this.pasajeroId).subscribe(
      (data) => {
        this.pasajero = data;
        this.pasajeroOriginal = { ...this.pasajero };
      },
      (error) => {
        console.log(error);
      }
    )
  }

  volverAPasajeros() {
    this.router.navigate(['/pasajero'])
  }

  actualizarDatos(){
    if (this.pasajero.nombre === '' || this.pasajero.nombre == null) {
      this.snack.open('El nombre es requerido', '', {
        duration: 3000
      });
      return;
    }

    if(this.pasajero.pasaporte === '' || this.pasajero.pasaporte == null) {
      this.snack.open('El pasaporte es requerido', '', {
        duration: 3000
      });
      return;
    }
  
    if (this.pasajero.fecha_nacimiento === '' || this.pasajero.fecha_nacimiento == null) {
      this.snack.open('La fecha de nacimiento es requerida', '', {
        duration: 3000
      });
      return;
    }

    this.pasajeroService.actualizarPasajero(this.pasajeroId, this.pasajero).subscribe(
      (data: any) => {
        Swal.fire('Pasajero actualizado', 'El pasajero ha sido actualizado con éxito', 'success').then(
          (e)=> {
            this.router.navigate(['/pasajero']);
          }
        );
      },
      (error: any) =>{
        Swal.fire('Error en el sistema', 'No se ha podido actualizar la información del pasajero', 'error');
      }
    );
  }

}
