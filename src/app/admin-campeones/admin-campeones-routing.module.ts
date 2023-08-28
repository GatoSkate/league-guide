import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCampeonesPage } from './admin-campeones.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCampeonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCampeonesPageRoutingModule {}
