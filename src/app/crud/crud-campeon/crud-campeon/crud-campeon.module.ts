import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudCampeonPageRoutingModule } from './crud-campeon-routing.module';

import { CrudCampeonPage } from './crud-campeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudCampeonPageRoutingModule
  ],
  declarations: [CrudCampeonPage]
})
export class CrudCampeonPageModule {}
