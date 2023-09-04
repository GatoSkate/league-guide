import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudAgregarItemPageRoutingModule } from './crud-agregar-item-routing.module';

import { CrudAgregarItemPage } from './crud-agregar-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudAgregarItemPageRoutingModule
  ],
  declarations: [CrudAgregarItemPage]
})
export class CrudAgregarItemPageModule {}
