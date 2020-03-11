import { Component, OnInit } from '@angular/core';
import {Persona} from '../persona.model';
import {AddPersonaService} from './add-persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(
    private personaService: AddPersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  save(){
    this.personaService.save(this.persona).subscribe(data => {
      this.router.navigate(["personas"]);
    });
    
  }

}
