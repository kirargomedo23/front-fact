import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoContribuyenteRoutingModule } from './tipo-contribuyente-routing.module';
import { TipoContribuyenteComponent } from './tipo-contribuyente.component';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { UtilService } from '@app/services/util/util.service';
import { ModalConfirmationModule } from '@app/shared/components/modal-confirmation/modal-confirmation.module';
import { FormsAngularMaterialModule } from '@app/shared/modules/forms-angular-material.module';

@NgModule({
  declarations: [
    TipoContribuyenteComponent
  ],
  imports: [
    CommonModule, TipoContribuyenteRoutingModule,
    FormsAngularMaterialModule , ModalConfirmationModule,
    MatSlideToggleModule
  ],
  providers:[UtilService]
})
export class TipoContribuyenteModule { }
