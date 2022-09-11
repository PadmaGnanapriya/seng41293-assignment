import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/home/home.module').then((file) => file.HomeModule),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./page/view-post/view-post.module').then((file) => file.ViewPostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
