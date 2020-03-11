import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categorias.model';
import { CategoriasService } from '../categorias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectedItem: Categoria;
  constructor(
    private s: CategoriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.selectedItem = new Categoria();
    this.s.getCategoria(this.activatedRoute.snapshot.params.id).subscribe(data => {
      this.selectedItem = data;
    }, error => console.log(error));
  }

  save(){
    this.s.updateCategoria(this.selectedItem).subscribe(data => {
      this.router.navigate(["categorias/list"]);
    }, e => console.log(e));
  }

}
