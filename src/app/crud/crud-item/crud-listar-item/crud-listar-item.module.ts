import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudListarItemPageRoutingModule } from './crud-listar-item-routing.module';

import { CrudListarItemPage } from './crud-listar-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudListarItemPageRoutingModule
  ],
  declarations: [CrudListarItemPage]
})
export class CrudListarItemPageModule {}
