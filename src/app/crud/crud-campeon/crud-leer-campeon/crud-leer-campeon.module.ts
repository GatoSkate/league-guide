import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerPageRoutingModule } from './crud-leer-campeon-routing.module';

import { ClienteLeerPage } from './crud-leer-campeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerPageRoutingModule
  ],
  declarations: [ClienteLeerPage]
})
export class CrudLeerCampeonPageModule {}