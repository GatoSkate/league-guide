import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaGdePage } from './mapa-gde.page';

const routes: Routes = [
  {
    path: '',
    component: MapaGdePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaGdePageRoutingModule {}
