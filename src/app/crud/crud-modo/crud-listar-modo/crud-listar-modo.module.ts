import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudListarModoPageRoutingModule } from './crud-listar-modo-routing.module';

import { CrudListarModoPage } from './crud-listar-modo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudListarModoPageRoutingModule
  ],
  declarations: [CrudListarModoPage]
})
export class CrudListarModoPageModule {}
