import { Component  } from '@angular/core';
import {   MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent  {


  constructor(
    private dialogRef: MatDialogRef<any>
  ){

  }

  close(answer: string) {
    this.dialogRef.close({ answer  });
  }

}
