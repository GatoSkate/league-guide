import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudListarMapaPageRoutingModule } from './crud-listar-mapa-routing.module';

import { CrudListarMapaPage } from './crud-listar-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudListarMapaPageRoutingModule
  ],
  declarations: [CrudListarMapaPage]
})
export class CrudListarMapaPageModule {}
