import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunasPageRoutingModule } from './runas-routing.module';

import { RunasPage } from './runas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunasPageRoutingModule
  ],
  declarations: [RunasPage]
})
export class RunasPageModule {}
