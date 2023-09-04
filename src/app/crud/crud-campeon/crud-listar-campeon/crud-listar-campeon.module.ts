import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPageRoutingModule } from './crud-listar-campeon-routing';
import { ListarClientePage } from './crud-listar-campeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPageRoutingModule
  ],
  declarations: [ListarClientePage]
})
export class CrudListarCampeonPageModule {}