import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { UtilService } from '@app/services/util/util.service';
import { ModalConfirmationModule } from '@app/shared/components/modal-confirmation/modal-confirmation.module';


import { FormsAngularMaterialModule } from '@app/shared/modules/forms-angular-material.module';


import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,  ListRoutingModule,
    FormsAngularMaterialModule, ModalConfirmationModule,
    MatMenuModule, MatSelectModule, MatIconModule
  ],
  providers:[UtilService]
})
export class ListModule { }
