import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonAatroxPage } from './campeon-aatrox.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonAatroxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonAatroxPageRoutingModule {}
