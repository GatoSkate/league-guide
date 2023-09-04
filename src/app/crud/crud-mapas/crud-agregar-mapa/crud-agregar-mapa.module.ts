import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudAgregarMapaPageRoutingModule } from './crud-agregar-mapa-routing.module';

import { CrudAgregarMapaPage } from './crud-agregar-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudAgregarMapaPageRoutingModule
  ],
  declarations: [CrudAgregarMapaPage]
})
export class CrudAgregarMapaPageModule {}
