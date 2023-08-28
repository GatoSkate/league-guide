import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonAatroxPageRoutingModule } from './campeon-aatrox-routing.module';

import { CampeonAatroxPage } from './campeon-aatrox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonAatroxPageRoutingModule
  ],
  declarations: [CampeonAatroxPage]
})
export class CampeonAatroxPageModule {}
