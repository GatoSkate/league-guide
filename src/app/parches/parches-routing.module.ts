import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParchesPage } from './parches.page';

const routes: Routes = [
  {
    path: '',
    component: ParchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParchesPageRoutingModule {}
