import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./views/sign-in/sign-in.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'master',
    loadChildren: () =>
      import('./views/master/master.module').then((m) => m.MasterPageModule),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./views/detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./views/menu/menu.module').then((m) => m.MenuPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
