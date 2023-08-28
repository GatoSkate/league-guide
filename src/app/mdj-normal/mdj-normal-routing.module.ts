import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdjNormalPage } from './mdj-normal.page';

const routes: Routes = [
  {
    path: '',
    component: MdjNormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdjNormalPageRoutingModule {}
