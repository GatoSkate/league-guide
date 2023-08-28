import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunasPage } from './runas.page';

const routes: Routes = [
  {
    path: '',
    component: RunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunasPageRoutingModule {}
