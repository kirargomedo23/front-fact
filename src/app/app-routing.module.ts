import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

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
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('@app/pages/pages.module').then((m) => m.PagesModule),
      }
    ]
  },
  {
    path: "**",
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
