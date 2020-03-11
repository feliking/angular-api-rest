import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  persona: Persona;
  constructor(
    private router: Router,
    private service: PersonaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.persona = new Persona();
    this.service.getPersona(this.activatedRoute.snapshot.params.id).subscribe(data => {
      this.persona = data;
    })
  }
  
  save(){
    this.service.updatePersona(this.persona).subscribe(data => {
      this.router.navigate(["personas"]);
    })
  }

}
