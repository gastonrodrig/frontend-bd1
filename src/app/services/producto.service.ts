import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helpers/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  public listarProductos(){
    return this.http.get(`${baseUrl}/productos/`);
  }

  public agregarProducto(producto:any){
    return this.http.post(`${baseUrl}/productos/`, producto);
  }
  
  public eliminarProducto(productoId:any){
    return this.http.delete(`${baseUrl}/productos/${productoId}`);
  }
  
  public obtenerProducto(productoId:any){
    return this.http.get(`${baseUrl}/productos/${productoId}`);
  }
  
  public actualizarProducto(producto:any){
    return this.http.put(`${baseUrl}/productos/`, producto);
  }

}