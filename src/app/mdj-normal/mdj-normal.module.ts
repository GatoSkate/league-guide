import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdjNormalPageRoutingModule } from './mdj-normal-routing.module';

import { MdjNormalPage } from './mdj-normal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdjNormalPageRoutingModule
  ],
  declarations: [MdjNormalPage]
})
export class MdjNormalPageModule {}
