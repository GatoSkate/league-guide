import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudAgregarItemPage } from './crud-agregar-item.page';

const routes: Routes = [
  {
    path: '',
    component: CrudAgregarItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudAgregarItemPageRoutingModule {}
