import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule,
    MatButtonModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, MatPaginatorModule, MatTableModule,
    MatCardModule, MatSnackBarModule, MatDividerModule
  ],
  exports:[ReactiveFormsModule, FormsModule,
    MatButtonModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, MatPaginatorModule, MatTableModule,
    MatCardModule, MatSnackBarModule, MatDividerModule]
})
export class FormsAngularMaterialModule { }
