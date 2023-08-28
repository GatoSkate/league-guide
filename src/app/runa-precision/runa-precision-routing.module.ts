import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunaPrecisionPage } from './runa-precision.page';

const routes: Routes = [
  {
    path: '',
    component: RunaPrecisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunaPrecisionPageRoutingModule {}
