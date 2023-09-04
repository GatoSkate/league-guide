import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteEliminarPageRoutingModule } from './crud-eliminar-campeon-routing.module';

import { ClienteEliminarPage } from './crud-eliminar-campeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteEliminarPageRoutingModule
  ],
  declarations: [ClienteEliminarPage]
})
export class CrudEliminarCampeonPageModule {}