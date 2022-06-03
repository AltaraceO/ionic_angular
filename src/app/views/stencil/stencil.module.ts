import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StencilPageRoutingModule } from './stencil-routing.module';

import { StencilPage } from './stencil.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, StencilPageRoutingModule],
  declarations: [StencilPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StencilPageModule {}
