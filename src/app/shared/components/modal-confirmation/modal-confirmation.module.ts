import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmationComponent } from './modal-confirmation.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ModalConfirmationComponent
  ],
  imports: [
    CommonModule,MatDialogModule,MatButtonModule
  ],
  exports: [ModalConfirmationComponent]
})
export class ModalConfirmationModule { }
