import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteActualizarPageRoutingModule } from './crud-actualizar-campeon-routing.module';

import { ClienteActualizarPage } from './crud-actualizar-campeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteActualizarPageRoutingModule
  ],
  declarations: [ClienteActualizarPage]
})
export class CrudActualizarCampeonPageModule {}