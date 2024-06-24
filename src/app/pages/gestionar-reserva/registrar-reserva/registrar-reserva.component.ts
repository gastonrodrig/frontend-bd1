import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PasajeroService } from 'src/app/services/pasajero.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { VueloService } from 'src/app/services/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit {

  reservaData = {
    fecha_reserva: '',
    importe: 0,
    id_vuelo: '',
    id_pasajero: ''
  }

  vuelos: any[] = []
  pasajeros: any[] = []

  readonly minDate: Date = new Date(new Date().getFullYear() - 20, 0, 1);

  constructor(
    private snack: MatSnackBar,
    private reservaService: ReservaService,
    private vueloService: VueloService,
    private pasajeroService: PasajeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
  
  volverAReservas() {
    this.router.navigate(['/reserva'])
  }

  guardarInformacion() {
    if (this.reservaData.fecha_reserva === '' || this.reservaData.fecha_reserva == null) {
      this.snack.open('La fecha de reserva es requerida', '', {
        duration: 3000
      });
      return;
    }

    if(String(this.reservaData.importe) === '') {
      this.snack.open('El importe es requerido', '', {
        duration: 3000
      });
      return;
    }
  
    if (this.reservaData.importe <= 50) {
      this.snack.open('El importe no puede ser menor a 50', '', {
        duration: 3000
      });
      return;
    }

    // if (this.reservaData.id_vuelo === '' || this.reservaData.id_vuelo === null ) {
    //   this.snack.open('Debe elegir un destino del vuelo', '', {
    //     duration: 3000
    //   });
    //   return;
    // }

    // if (this.reservaData.id_pasajero === '' || this.reservaData.id_pasajero === null) {
    //   this.snack.open('Debe elegir un pasajero', '', {
    //     duration: 3000
    //   });
    //   return;
    // }

    console.log(this.reservaData)

    this.reservaService.agregarReserva(this.reservaData).subscribe(
      (data) => {
        Swal.fire('Reserva guardada', 'La reserva ha sido guardada con éxito', 'success')
        console.log(data)
        // this.reservaData = {
        //   fecha_reserva: '',
        //   importe: 0,
        //   id_vuelo: '',
        //   id_pasajero: ''
        // }
        this.router.navigate(['/reserva'])
      },
      (error) => {
        Swal.fire('Error', 'Error al guardar la información de la reserva', 'error')
      }
    );
  }
}
