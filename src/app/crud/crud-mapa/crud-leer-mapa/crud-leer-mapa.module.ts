import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudLeerMapaPageRoutingModule } from './crud-leer-mapa-routing.module';

import { CrudLeerMapaPage } from './crud-leer-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudLeerMapaPageRoutingModule
  ],
  declarations: [CrudLeerMapaPage]
})
export class CrudLeerMapaPageModule {}
