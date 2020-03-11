import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { AddPersonaComponent } from './persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './persona/edit-persona/edit-persona.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AddComponent } from './categorias/add/add.component';
import { EditComponent } from './categorias/edit/edit.component';
import { ListComponent } from './categorias/list/list.component';


const routes: Routes = [
  {
    path: "personas",
    component: PersonaComponent,
  },
  {
    path: "personas/add",
    component: AddPersonaComponent
  },
  {
    path: "personas/edit",
    component: EditPersonaComponent
  },
  {
    path: "categorias",
    component: CategoriasComponent,
    children: [
      {
        path: "list",
        component: ListComponent
      },
      {
        path: "add",
        component: AddComponent
      },
      {
        path: "edit",
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
