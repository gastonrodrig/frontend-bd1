import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { VueloService } from 'src/app/services/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-vuelo',
  templateUrl: './modificar-vuelo.component.html',
  styleUrls: ['./modificar-vuelo.component.css']
})
export class ModificarVueloComponent {

  vueloId = 0;
  vuelo: any;
  vueloOriginal: any;

  readonly minDate: Date = new Date(new Date().getFullYear() - 20, 0, 1);

  constructor(
    private snack: MatSnackBar,
    private route: ActivatedRoute,
    private vueloService: VueloService,
    private router: Router) { }

  ngOnInit(): void {
    this.vueloId = this.route.snapshot.params['id_vuelo'];
    this.vueloService.obtenerVuelo(this.vueloId).subscribe(
      (data) => {
        this.vuelo = data;
        this.vueloOriginal = { ...this.vuelo };
      },
      (error) => {
        console.log(error);
      }
    )
  }

  volverAVuelos() {
    this.router.navigate(['/vuelo'])
  }

  actualizarDatos(){
    if (this.vuelo.destino === '' || this.vuelo.destino == null) {
      this.snack.open('El destino es requerido', '', {
        duration: 3000
      });
      return;
    }
  
    if (this.vuelo.fecha === '' || this.vuelo.fecha == null) {
      this.snack.open('La fecha es requerida', '', {
        duration: 3000
      });
      return;
    }

    console.log(this.vuelo)
  
    this.vueloService.actualizarVuelo(this.vueloId,this.vuelo).subscribe(
      (data) => {
        Swal.fire('Vuelo actualizado', 'El vuelo ha sido actualizado con éxito', 'success').then(
          (e)=> {
            this.router.navigate(['/vuelo']);
          }
        );
      },
      (error) =>{
        Swal.fire('Error en el sistema', 'No se ha podido actualizar la información del vuelo', 'error');
      }
    );
  }

  validateDate(event: any): void {
    const selectedDate = new Date(event.value);
    if (selectedDate <= this.minDate) {
      this.vuelo.fecha = null;
      alert('La fecha seleccionada no puede ser la mínima permitida.');
    }
  }
}
