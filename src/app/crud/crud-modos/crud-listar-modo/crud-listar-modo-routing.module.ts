import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudListarModoPage } from './crud-listar-modo.page';

const routes: Routes = [
  {
    path: '',
    component: CrudListarModoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudListarModoPageRoutingModule {}
