import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCampeonesPageRoutingModule } from './admin-campeones-routing.module';

import { AdminCampeonesPage } from './admin-campeones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCampeonesPageRoutingModule
  ],
  declarations: [AdminCampeonesPage]
})
export class AdminCampeonesPageModule {}
