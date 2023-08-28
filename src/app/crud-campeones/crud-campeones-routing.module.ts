import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudCampeonesPage } from './crud-campeones.page';

const routes: Routes = [
  {
    path: '',
    component: CrudCampeonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudCampeonesPageRoutingModule {}
