import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudAgregarModoPage } from './crud-agregar-modo.page';

const routes: Routes = [
  {
    path: '',
    component: CrudAgregarModoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudAgregarModoPageRoutingModule {}
