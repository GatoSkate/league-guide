import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudLeerItemPageRoutingModule } from './crud-leer-item-routing.module';

import { CrudLeerItemPage } from './crud-leer-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudLeerItemPageRoutingModule
  ],
  declarations: [CrudLeerItemPage]
})
export class CrudLeerItemPageModule {}
