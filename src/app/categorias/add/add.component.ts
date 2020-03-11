import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categorias.model';
import { CategoriasService } from '../categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  selectedItem: Categoria = new Categoria();
  constructor(
    private s: CategoriasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(){
    this.s.addCategoria(this.selectedItem).subscribe(data => {
      this.router.navigate(["categorias/list"]);
    }, error => console.log(error));
  }

}
