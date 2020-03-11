import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categorias.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http: HttpClient
  ) { }

  getCategorias(){
    return this.http.get<Categoria[]>(environment.url+"api/categoria");
  }

  addCategoria(categoria: Categoria){
    return this.http.post<Categoria>(environment.url+"api/categoria", categoria);
  }

  getCategoria(id: number){
    return this.http.get<Categoria>(environment.url+"api/categoria/"+id);
  }

  updateCategoria(categoria: Categoria){
    return this.http.put<Categoria>(environment.url+"api/categoria", categoria);
  }

  deleteCategoria(id: number){
    return this.http.delete<Categoria>(environment.url+"api/categoria/"+id);
  }
}
