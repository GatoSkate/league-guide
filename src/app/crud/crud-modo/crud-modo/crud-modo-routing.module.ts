import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudModoPage } from './crud-modo.page';

const routes: Routes = [
  {
    path: '',
    component: CrudModoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudModoPageRoutingModule {}
