import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudEliminarItemPageRoutingModule } from './crud-eliminar-item-routing.module';

import { CrudEliminarItemPage } from './crud-eliminar-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudEliminarItemPageRoutingModule
  ],
  declarations: [CrudEliminarItemPage]
})
export class CrudEliminarItemPageModule {}
