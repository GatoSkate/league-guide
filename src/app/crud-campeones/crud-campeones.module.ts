import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudCampeonesPageRoutingModule } from './crud-campeones-routing.module';

import { CrudCampeonesPage } from './crud-campeones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudCampeonesPageRoutingModule
  ],
  declarations: [CrudCampeonesPage]
})
export class CrudCampeonesPageModule {}
