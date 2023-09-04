import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudLeerMapaPage } from './crud-leer-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: CrudLeerMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudLeerMapaPageRoutingModule {}
