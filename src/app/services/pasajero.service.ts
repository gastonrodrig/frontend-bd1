import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helpers/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {
  constructor(private http:HttpClient) { }

  public listarPasajeros(){
    return this.http.get(`${baseUrl}/pasajero/`);
  }
  public agregarPasajero(pasajero: any){
    return this.http.post(`${baseUrl}/pasajero/`, pasajero);
  }
  public eliminarPasajero(pasajeroId:any){
    return this.http.delete(`${baseUrl}/pasajero/${pasajeroId}`);
  }
  public obtenerPasajero(pasajeroId:any){
    return this.http.get(`${baseUrl}/pasajero/${pasajeroId}`);
  }
  public actualizarPasajero(pasajeroId:any, pasajero:any){
    return this.http.put(`${baseUrl}/pasajero/${pasajeroId}`, pasajero);
  }
}
