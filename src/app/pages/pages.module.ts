import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsAngularMaterialModule } from '@app/shared/modules/forms-angular-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsAngularMaterialModule
  ]
})
export class PagesModule { }
