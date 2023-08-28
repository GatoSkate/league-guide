import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParchesPageRoutingModule } from './parches-routing.module';

import { ParchesPage } from './parches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParchesPageRoutingModule
  ],
  declarations: [ParchesPage]
})
export class ParchesPageModule {}
