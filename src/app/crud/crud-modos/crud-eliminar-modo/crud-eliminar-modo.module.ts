import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudEliminarModoPageRoutingModule } from './crud-eliminar-modo-routing.module';

import { CrudEliminarModoPage } from './crud-eliminar-modo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudEliminarModoPageRoutingModule
  ],
  declarations: [CrudEliminarModoPage]
})
export class CrudEliminarModoPageModule {}
