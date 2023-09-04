import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudModificarModoPageRoutingModule } from './crud-modificar-modo-routing.module';

import { CrudModificarModoPage } from './crud-modificar-modo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudModificarModoPageRoutingModule
  ],
  declarations: [CrudModificarModoPage]
})
export class CrudModificarModoPageModule {}
