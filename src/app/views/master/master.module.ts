import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterPageRoutingModule } from './master-routing.module';

import { MasterPage } from './master.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MasterPageRoutingModule],
  declarations: [MasterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MasterPageModule {}
