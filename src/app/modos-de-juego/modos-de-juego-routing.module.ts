import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModosDeJuegoPage } from './modos-de-juego.page';

const routes: Routes = [
  {
    path: '',
    component: ModosDeJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModosDeJuegoPageRoutingModule {}
