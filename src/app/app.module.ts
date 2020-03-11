import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AddPersonaComponent } from './persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './persona/edit-persona/edit-persona.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ListComponent } from './categorias/list/list.component';
import { AddComponent } from './categorias/add/add.component';
import { EditComponent } from './categorias/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    AddPersonaComponent,
    EditPersonaComponent,
    CategoriasComponent,
    ListComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
