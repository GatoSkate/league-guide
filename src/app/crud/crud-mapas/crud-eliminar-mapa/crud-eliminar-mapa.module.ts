import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudEliminarMapaPageRoutingModule } from './crud-eliminar-mapa-routing.module';

import { CrudEliminarMapaPage } from './crud-eliminar-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudEliminarMapaPageRoutingModule
  ],
  declarations: [CrudEliminarMapaPage]
})
export class CrudEliminarMapaPageModule {}
