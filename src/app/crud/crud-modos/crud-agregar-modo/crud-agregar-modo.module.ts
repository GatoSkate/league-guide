import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudAgregarModoPageRoutingModule } from './crud-agregar-modo-routing.module';

import { CrudAgregarModoPage } from './crud-agregar-modo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudAgregarModoPageRoutingModule
  ],
  declarations: [CrudAgregarModoPage]
})
export class CrudAgregarModoPageModule {}
