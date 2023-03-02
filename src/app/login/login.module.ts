import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsAngularMaterialModule } from '@app/shared/modules/forms-angular-material.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, LoginRoutingModule,
    FormsAngularMaterialModule,
  ]
})
export class LoginModule { }
