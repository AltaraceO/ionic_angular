import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/sign-in',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('../sign-in/sign-in.module').then((m) => m.SignInPageModule),
      },
      {
        path: 'master',
        loadChildren: () =>
          import('../master/master.module').then((m) => m.MasterPageModule),
      },
      {
        path: 'master/:id',
        loadChildren: () =>
          import('../detail/detail.module').then((m) => m.DetailPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
