import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeroService } from 'src/app/services/pasajero.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { VueloService } from 'src/app/services/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent {

  reservaId = 0;
  reserva: any;
  reservaOriginal: any;

  vuelos: any[] = []
  pasajeros: any[] = []

  ngModelVueloDestino = true;

  constructor(
    private snack: MatSnackBar,
    private route: ActivatedRoute,
    private reservaService: ReservaService,
    private vueloService: VueloService,
    private pasajeroService: PasajeroService,
    private router: Router) { }

  ngOnInit(): void {
    this.reservaId = this.route.snapshot.params['id_reserva'];
    this.reservaService.obtenerReserva(this.reservaId).subscribe(
      (data) => {
        this.reserva = data;
        this.reservaOriginal = { ...this.reserva };
        console.log(this.reservaOriginal)
        console.log(this.reserva)
      },
      (error) => {
        console.log(error);
      }
    )
    this.vueloService.listarVuelos().subscribe(
      (data: any) => {
        this.vuelos = data
      },
      (error) => {
        Swal.fire('Error', 'Error al listar los vuelos de la base de datos', 'error');
      }
    )
    this.pasajeroService.listarPasajeros().subscribe(
      (data: any) => {
        this.pasajeros = data
      },
      (error) => {
        Swal.fire('Error', 'Error al listar los pasajeros de la base de datos', 'error');
      }
    )
  }

  handleVueloChange(event: any): void {
    this.ngModelVueloDestino = false;
    this.reserva.id_vuelo = event.value;
  }

  volverAReservas() {
    this.router.navigate(['/reserva'])
  }

  actualizarDatos(){
    if (this.reserva.fecha_reserva === '' || this.reserva.fecha_reserva == null) {
      this.snack.open('La fecha de reserva es requerida', '', {
        duration: 3000
      });
      return;
    }

    if(String(this.reserva.importe) === '') {
      this.snack.open('El importe es requerido', '', {
        duration: 3000
      });
      return;
    }
  
    if (this.reserva.importe <= 50) {
      this.snack.open('El importe no puede ser menor a 50', '', {
        duration: 3000
      });
      return;
    }

    if (this.reserva.id_vuelo === '' || this.reserva.id_vuelo === null ) {
      this.snack.open('Debe elegir un destino del vuelo', '', {
        duration: 3000
      });
      return;
    }

    if (this.reserva.id_pasajero === '' || this.reserva.id_pasajero === null) {
      this.snack.open('Debe elegir un pasajero', '', {
        duration: 3000
      });
      return;
    }
    const reservaData = {
      id_vuelo : this.reserva.vuelo.id_vuelo,
      id_pasajero : this.reserva.pasajero.id_pasajero,
      importe : this.reserva.importe,
      fecha_reserva : this.reserva.fecha_reserva
    }

    this.reservaService.actualizarReserva(this.reservaId, reservaData).subscribe(
      (data) => {
        Swal.fire('Reserva actualizada', 'La reserva ha sido actualizado con éxito', 'success').then(
          (e)=> {
            this.router.navigate(['/reserva']);
          }
        );
      },
      (error) =>{
        Swal.fire('Error en el sistema', 'No se ha podido actualizar la información de la reserva', 'error');
      }
    );
  }
  
}
