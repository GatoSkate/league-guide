import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteLeerPage } from './crud-leer-campeon.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteLeerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerPageRoutingModule {}