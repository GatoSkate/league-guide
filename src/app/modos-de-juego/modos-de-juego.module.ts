import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModosDeJuegoPageRoutingModule } from './modos-de-juego-routing.module';

import { ModosDeJuegoPage } from './modos-de-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModosDeJuegoPageRoutingModule
  ],
  declarations: [ModosDeJuegoPage]
})
export class ModosDeJuegoPageModule {}
