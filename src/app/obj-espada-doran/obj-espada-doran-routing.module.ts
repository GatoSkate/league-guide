import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjEspadaDoranPage } from './obj-espada-doran.page';

const routes: Routes = [
  {
    path: '',
    component: ObjEspadaDoranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjEspadaDoranPageRoutingModule {}
