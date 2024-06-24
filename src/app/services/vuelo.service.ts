import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helpers/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  constructor(private http:HttpClient) { }

  public listarVuelos(){
    return this.http.get(`${baseUrl}/vuelo/`);
  }
  public agregarVuelo(vuelo: any){
    return this.http.post(`${baseUrl}/vuelo/`, vuelo);
  }
  public eliminarVuelo(vueloId:any){
    return this.http.delete(`${baseUrl}/vuelo/${vueloId}`);
  }
  public obtenerVuelo(vueloId:any){
    return this.http.get(`${baseUrl}/vuelo/${vueloId}`);
  }
  public actualizarVuelo(vueloId: any, vuelo:any){
    return this.http.put(`${baseUrl}/vuelo/${vueloId}`, vuelo);
  }
}