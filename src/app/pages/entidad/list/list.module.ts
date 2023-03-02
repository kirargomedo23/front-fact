import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { UtilService } from '@app/services/util/util.service';
import { ModalConfirmationModule } from '@app/shared/components/modal-confirmation/modal-confirmation.module';


import { FormsAngularMaterialModule } from '@app/shared/modules/forms-angular-material.module';


import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,  ListRoutingModule,
    FormsAngularMaterialModule, ModalConfirmationModule,
    MatMenuModule, MatSelectModule
  ],
  providers:[UtilService]
})
export class ListModule { }
