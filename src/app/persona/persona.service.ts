import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Persona} from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private http: HttpClient
  ) { }
  
  getPersonas(){
    return this.http.get<any>(environment.url+"api/persona");
  }

  updatePersona(persona: Persona){
    return this.http.put<Persona>(environment.url+"api/persona", persona);
  }

  deletePersona(id: number){
    return this.http.delete<String>(environment.url+'api/persona/'+id);
  }

  getPersona(id: number){
    return this.http.get<Persona>(environment.url+"api/persona/"+id);
  }
}
