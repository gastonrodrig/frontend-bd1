import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helpers/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  constructor(private http:HttpClient) { }

  public listarReservas(){
    return this.http.get(`${baseUrl}/reserva/`);
  }
  public agregarReserva(reserva: any){
    return this.http.post(`${baseUrl}/reserva/`, reserva);
  }
  public eliminarReserva(reservaId:any){
    return this.http.delete(`${baseUrl}/reserva/${reservaId}`);
  }
  public obtenerReserva(reservaId:any){
    return this.http.get(`${baseUrl}/reserva/${reservaId}`);
  }
  public actualizarReserva(reservaId:any, reserva:any){
    return this.http.put(`${baseUrl}/reserva/${reservaId}`, reserva);
  }
}
