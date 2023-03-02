import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren:  () => import('@app/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'app',
    children: [
      {
        path: '',
        loadChildren: () => import('@app/pages/pages.module').then((m) => m.PagesModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
