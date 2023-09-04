import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudAgregarMapaPage } from './crud-agregar-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: CrudAgregarMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudAgregarMapaPageRoutingModule {}
