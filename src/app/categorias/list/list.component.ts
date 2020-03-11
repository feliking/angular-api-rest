import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Categoria } from '../categorias.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Categoria[];
  constructor(
    private s: CategoriasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTable();
  }

  getTable(){
    this.s.getCategorias().subscribe(data => {
      this.items = data;
    }, error => console.log(error))
  }

  editar(id: number){
    this.router.navigate(["categorias/edit", id]);
  }

  borrar(id: number){
    this.s.deleteCategoria(id).subscribe(data =>{
      this.getTable();
    })
  }
}
