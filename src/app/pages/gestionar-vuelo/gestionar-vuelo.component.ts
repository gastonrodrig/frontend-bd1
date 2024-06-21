import { Component, OnInit } from '@angular/core';
import { VueloService } from 'src/app/services/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-vuelo',
  templateUrl: './gestionar-vuelo.component.html',
  styleUrls: ['./gestionar-vuelo.component.css']
})
export class GestionarVueloComponent implements OnInit {

  vuelos: any = [];
  searchTerm: string = '';
  
  constructor(
    private vueloService: VueloService
  ) {}

  ngOnInit(): void {
    this.vueloService.listarVuelos().subscribe(
      (data: any) => {
        this.vuelos = data
      },
      (error) => {
        Swal.fire('Error', 'Error al cargar los datos', 'error');
        console.log(error)
      }
    )
  }

  vuelosMostrados(): any[] {
    return this.vuelosFiltrados();
  }

  vuelosFiltrados(): any[] {
    return this.vuelos.filter((vuelo: any) =>
      vuelo.destino.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  eliminarVuelo(vueloId: any): void {
    Swal.fire({
      title: 'Eliminar vuelo',
      text: '¿Estás seguro de eliminar el vuelo de la lista?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vueloService.eliminarVuelo(vueloId).subscribe(
          (data) => {
            this.vuelos = this.vuelos.filter((vuelo: any) => vuelo.id_vuelo !== vueloId);
            Swal.fire('Vuelo eliminado', 'El vuelo ha sido eliminado de la base de datos', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el vuelo de la base de datos', 'error');
          }
        );
      }
    });
  }
}
