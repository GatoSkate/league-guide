import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudListarMapaPage } from './crud-listar-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: CrudListarMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudListarMapaPageRoutingModule {}
