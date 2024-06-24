import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeroService } from 'src/app/services/pasajero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-pasajero',
  templateUrl: './gestionar-pasajero.component.html',
  styleUrls: ['./gestionar-pasajero.component.css']
})
export class GestionarPasajeroComponent {

  pasajeros: any = [];
  searchTerm: string = '';
  
  constructor(
    private pasajeroService: PasajeroService
  ) {}

  ngOnInit(): void {
    this.pasajeroService.listarPasajeros().subscribe(
      (data: any) => {
        this.pasajeros = data
      },
      (error) => {
        Swal.fire('Error', 'Error al cargar los datos', 'error');
        console.log(error)
      }
    )
  }

  pasajerosMostrados(): any[] {
    return this.pasajerosFiltrados();
  }

  pasajerosFiltrados(): any[] {
    return this.pasajeros.filter((pasajero: any) =>
      pasajero.pasaporte.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  eliminarPasajero(pasajeroId: any): void {
    Swal.fire({
      title: 'Eliminar pasajero',
      text: '¿Estás seguro de eliminar el pasajero de la lista?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pasajeroService.eliminarPasajero(pasajeroId).subscribe(
          (data) => {
            this.pasajeros = this.pasajeros.filter((pasajero: any) => pasajero.id_pasajero !== pasajeroId);
            Swal.fire('Pasajero eliminado', 'El pasajero ha sido eliminado de la base de datos', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el pasajero de la base de datos', 'error');
          }
        );
      }
    });
  }

}
