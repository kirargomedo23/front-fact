import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { UtilService } from '@app/services/util/util.service';
import { ModalConfirmationModule } from '@app/shared/components/modal-confirmation/modal-confirmation.module';
import { FormsAngularMaterialModule } from '@app/shared/modules/forms-angular-material.module';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule, CreateRoutingModule,
    MatSlideToggleModule,
    ModalConfirmationModule, FormsAngularMaterialModule
  ],
  providers:[UtilService]
})
export class CreateModule { }
