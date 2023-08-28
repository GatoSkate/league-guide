import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunaPrecisionPageRoutingModule } from './runa-precision-routing.module';

import { RunaPrecisionPage } from './runa-precision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunaPrecisionPageRoutingModule
  ],
  declarations: [RunaPrecisionPage]
})
export class RunaPrecisionPageModule {}
