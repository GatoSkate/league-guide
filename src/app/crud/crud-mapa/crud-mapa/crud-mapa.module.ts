import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudMapaPageRoutingModule } from './crud-mapa-routing.module';

import { CrudMapaPage } from './crud-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudMapaPageRoutingModule
  ],
  declarations: [CrudMapaPage]
})
export class CrudMapaPageModule {}
