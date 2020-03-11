import { Injectable } from '@angular/core';
import { Persona} from '../persona.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddPersonaService {

  constructor(
    private http: HttpClient
  ) { }

  save(persona: Persona){
    return this.http.post<Persona>(environment.url+"api/persona", persona);
  }
}
