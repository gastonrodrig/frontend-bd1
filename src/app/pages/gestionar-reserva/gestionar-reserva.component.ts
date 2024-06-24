import { Component } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-reserva',
  templateUrl: './gestionar-reserva.component.html',
  styleUrls: ['./gestionar-reserva.component.css']
})
export class GestionarReservaComponent {

  reservas: any = [];
  searchTerm: string = '';
  
  constructor(
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    this.reservaService.listarReservas().subscribe(
      (data: any) => {
        this.reservas = data
        console.log(this.reservas)
      },
      (error) => {
        Swal.fire('Error', 'Error al cargar los datos', 'error');
        console.log(error)
      }
    )
  }

  reservasMostradas(): any[] {
    return this.reservasFiltradas();
  }

  reservasFiltradas(): any[] {
    return this.reservas.filter((reserva: any) =>
      reserva.fecha_reserva.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  eliminarReserva(reservaId: any): void {
    Swal.fire({
      title: 'Eliminar reserva',
      text: '¿Estás seguro de eliminar la reserva de la lista?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reservaService.eliminarReserva(reservaId).subscribe(
          (data) => {
            this.reservas = this.reservas.filter((reserva: any) => reserva.id_reserva !== reservaId);
            Swal.fire('Reserva eliminada', 'La reserva ha sido eliminada de la base de datos', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar la reserva de la base de datos', 'error');
          }
        );
      }
    });
  }
}
