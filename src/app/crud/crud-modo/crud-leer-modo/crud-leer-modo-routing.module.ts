import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudLeerModoPage } from './crud-leer-modo.page';

const routes: Routes = [
  {
    path: '',
    component: CrudLeerModoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudLeerModoPageRoutingModule {}
