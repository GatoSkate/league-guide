import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudModificarModoPage } from './crud-modificar-modo.page';

const routes: Routes = [
  {
    path: '',
    component: CrudModificarModoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudModificarModoPageRoutingModule {}
