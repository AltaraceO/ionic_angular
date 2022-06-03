import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StencilPage } from './stencil.page';

const routes: Routes = [
  {
    path: '',
    component: StencilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StencilPageRoutingModule {}
