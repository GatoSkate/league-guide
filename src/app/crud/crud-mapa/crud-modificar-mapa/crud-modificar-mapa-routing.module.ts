import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudModificarMapaPage } from './crud-modificar-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: CrudModificarMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudModificarMapaPageRoutingModule {}
