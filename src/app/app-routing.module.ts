import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //*Routes right into the menu - the rest of the routing is managed from there
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./views/menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'stencil',
    loadChildren: () =>
      import('./views/stencil/stencil.module').then((m) => m.StencilPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { preloadingStrategy: PreloadAllModules },
      { useHash: true }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
