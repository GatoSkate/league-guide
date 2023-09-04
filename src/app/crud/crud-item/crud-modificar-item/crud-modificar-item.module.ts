import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudModificarItemPageRoutingModule } from './crud-modificar-item-routing.module';

import { CrudModificarItemPage } from './crud-modificar-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudModificarItemPageRoutingModule
  ],
  declarations: [CrudModificarItemPage]
})
export class CrudModificarItemPageModule {}
