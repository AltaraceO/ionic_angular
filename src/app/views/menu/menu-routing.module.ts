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
    // *menu's children will get routed through menu. the paths are listed in the pages array in the TS file in this folder
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
      {
        path: 'chat',
        loadChildren: () =>
          import('../chat/chat.module').then((m) => m.ChatPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
