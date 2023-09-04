import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudEliminarMapaPage } from './crud-eliminar-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: CrudEliminarMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudEliminarMapaPageRoutingModule {}
