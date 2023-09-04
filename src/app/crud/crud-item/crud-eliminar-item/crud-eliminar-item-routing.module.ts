import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudEliminarItemPage } from './crud-eliminar-item.page';

const routes: Routes = [
  {
    path: '',
    component: CrudEliminarItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudEliminarItemPageRoutingModule {}
