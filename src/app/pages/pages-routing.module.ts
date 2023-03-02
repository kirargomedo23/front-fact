import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'entidad-create',
    loadChildren: () => import('@pages/entidad/create/create.module').then((m) => m.CreateModule),
  },
  {
    path: 'entidad-list',
    loadChildren: () => import('@pages/entidad/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'tipo-contribuyente/:id',
    loadChildren: () => import('@pages/tipo-contribuyente/tipo-contribuyente.module').then((m) => m.TipoContribuyenteModule),
  },
  {
    path: 'tipo-documento/:id',
    loadChildren: () => import('@pages/tipo-documento/tipo-documento.module').then((m) => m.TipoDocumentoModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
