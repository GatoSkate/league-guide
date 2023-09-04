import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudLeerModoPageRoutingModule } from './crud-leer-modo-routing.module';

import { CrudLeerModoPage } from './crud-leer-modo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudLeerModoPageRoutingModule
  ],
  declarations: [CrudLeerModoPage]
})
export class CrudLeerModoPageModule {}
