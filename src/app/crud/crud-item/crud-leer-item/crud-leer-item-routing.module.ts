import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudLeerItemPage } from './crud-leer-item.page';

const routes: Routes = [
  {
    path: '',
    component: CrudLeerItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudLeerItemPageRoutingModule {}
