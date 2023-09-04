import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudCampeonPage } from './crud-campeon.page';

const routes: Routes = [
  {
    path: '',
    component: CrudCampeonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudCampeonPageRoutingModule {}
