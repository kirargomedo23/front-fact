import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

type ActionType = 'Success' | 'Error';
type PanelClass = 'Primary' | 'Error';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private snackBar: MatSnackBar
  ) {

  }

  private openMessage(message: string, action: ActionType,
    horizontalPosition: MatSnackBarHorizontalPosition,
    verticalPosition: MatSnackBarVerticalPosition,
    panelClass?: PanelClass ){
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition,
      verticalPosition,
      panelClass
    });
  }

  public openMessageError(  message: string){
    this.openMessage(message, 'Error', "right","top", 'Error');
  }

  public openMessageSucces( message: string){
    this.openMessage(message, 'Success', "right","top", 'Primary');
  }

}
