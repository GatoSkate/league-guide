import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudMapaPage } from './crud-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: CrudMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudMapaPageRoutingModule {}
