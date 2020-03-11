import { Component, OnInit } from '@angular/core';
import { PersonaService } from './persona.service';
import { Persona } from './persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona[];
  constructor(
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this.personaService.getPersonas().subscribe(data => this.personas = data);
  }

  editar(id: number){
    this.router.navigate(["personas/edit", id]);
  }

  borrar(id: number){
    this.personaService.deletePersona(id).subscribe(data => {
      this.getPersonas();
    })
  }
}
