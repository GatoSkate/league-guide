import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaGdePageRoutingModule } from './mapa-gde-routing.module';

import { MapaGdePage } from './mapa-gde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaGdePageRoutingModule
  ],
  declarations: [MapaGdePage]
})
export class MapaGdePageModule {}
