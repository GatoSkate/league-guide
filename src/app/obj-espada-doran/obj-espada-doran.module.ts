import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjEspadaDoranPageRoutingModule } from './obj-espada-doran-routing.module';

import { ObjEspadaDoranPage } from './obj-espada-doran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjEspadaDoranPageRoutingModule
  ],
  declarations: [ObjEspadaDoranPage]
})
export class ObjEspadaDoranPageModule {}
