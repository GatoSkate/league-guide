import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudModificarMapaPageRoutingModule } from './crud-modificar-mapa-routing.module';

import { CrudModificarMapaPage } from './crud-modificar-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudModificarMapaPageRoutingModule
  ],
  declarations: [CrudModificarMapaPage]
})
export class CrudModificarMapaPageModule {}
