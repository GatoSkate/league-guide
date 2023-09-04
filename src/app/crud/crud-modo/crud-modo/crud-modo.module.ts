import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudModoPageRoutingModule } from './crud-modo-routing.module';

import { CrudModoPage } from './crud-modo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudModoPageRoutingModule
  ],
  declarations: [CrudModoPage]
})
export class CrudModoPageModule {}
