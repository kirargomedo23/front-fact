import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { UtilService } from '@app/services/util/util.service';
import { ModalConfirmationModule } from '@app/shared/components/modal-confirmation/modal-confirmation.module';


import { FormsAngularMaterialModule } from '@app/shared/modules/forms-angular-material.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,  ListRoutingModule,
    FormsAngularMaterialModule, ModalConfirmationModule
  ],
  providers:[UtilService]
})
export class ListModule { }
