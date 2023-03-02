import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoDocumentoRoutingModule } from './tipo-documento-routing.module';
import { TipoDocumentoComponent } from './tipo-documento.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { UtilService } from '@app/services/util/util.service';
import { ModalConfirmationModule } from '@app/shared/components/modal-confirmation/modal-confirmation.module';
import { FormsAngularMaterialModule } from '@app/shared/modules/forms-angular-material.module';

@NgModule({
  declarations: [
    TipoDocumentoComponent
  ],
  imports: [
    CommonModule,  TipoDocumentoRoutingModule,
    ModalConfirmationModule, FormsAngularMaterialModule,
    MatSlideToggleModule
  ],
  providers:[UtilService]
})
export class TipoDocumentoModule { }
