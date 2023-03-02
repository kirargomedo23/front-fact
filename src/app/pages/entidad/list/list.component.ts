import { ModalConfirmationComponent } from '@app/shared/components/modal-confirmation/modal-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadService } from '@app/services/entidad/entidad.service';
import { UtilService } from '@app/services/util/util.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {


  dataSource: MatTableDataSource<any> | null = null;
  displayedColumns: string[] = [  "nombre",
    "Acciones"];

  constructor(
    private readonly matDialog: MatDialog,
    private readonly utilService: UtilService,
    private readonly entidadService: EntidadService,
    private readonly router: Router
  ){

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.getAllContribuyentes();
  }

  navigateToPage(url:string){
    this.router.navigate([url]);
  }

  getAllContribuyentes(){

  }

  openModal(){
    this.matDialog.open(ModalConfirmationComponent, {
      disableClose: false,
      width: "400px",
    }).afterClosed()
    .subscribe(({answer}) => {
        if (answer === "yes") {
          this.update();
        }
    });
  }


  update(){

  }

  delete(){

  }
}
