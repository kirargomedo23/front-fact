import { ModalConfirmationComponent } from '@app/shared/components/modal-confirmation/modal-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadService } from '@app/services/entidad/entidad.service';
import { UtilService } from '@app/services/util/util.service';
import { MatTableDataSource } from '@angular/material/table';
import { Entidad } from '@app/interfaces/entidad.interface';
import { MatSelectChange } from '@angular/material/select';
import { TableColumn } from '@app/interfaces/table-column.interface';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {

  public loading : boolean = true;

  dataSource: any = [];

  columns: TableColumn<Entidad>[] = [
    { label: 'Nombre Comercial' , property:'nombre_comercial', type:'text'},
    { label: 'Nro. Documento' , property:'nro_documento', type:'text'},
    { label: 'Razón Social' , property:'razon_social', type:'text'},
    { label: 'Teléfono' , property:'telefono', type:'text'},
    { label: 'Nombre del Contribuyente' , property:'contribuyente.nombre', type:'text'},
    { label: 'Nombre del Documento' , property:'documento.nombre', type:'text'},
    { label: 'Acciones' , property:'acciones', type:'button'}
  ];

  constructor(
    private readonly matDialog: MatDialog,
    private readonly utilService: UtilService,
    private readonly entidadService: EntidadService,
    private readonly router: Router
  ){

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.getAll();
  }

  getColumns(){
    return this.columns.map( data => data.property );
  }

  navigateToPage(url:string){
    this.router.navigate([url]);
  }

  getAll(){
    this.loading = true;

    this.entidadService.listAll()
    .subscribe({
      next: (data:any)  => {
        this.loading = false;
        this.dataSource.data = data;
      },
      error: ()  => {
        this.loading = false;
        this.utilService.openMessageError( 'Ocurrió un error al obtener la lista de entidades');
      }
    });
  }

  openModal(  ){
    this.matDialog.open(ModalConfirmationComponent, {
      disableClose: false,
      width: "400px",
    }).afterClosed()
    .subscribe(({answer}) => {
        if (answer === "yes") {
          this.delete();
        }
    });
  }


  update(url: string){
    this.router.navigate([url]);
  }

  delete(){

  }

  filterForActive({value}:MatSelectChange){
    this.entidadService
    .filter(value)
    .subscribe({
      next: (data:any)  => {
        this.loading = false;
        this.dataSource.data = data;
      },
      error: ()  => {
        this.loading = false;
        this.utilService.openMessageError( 'Ocurrió un error al obtener la lista de entidades filtradas');
      }
    });
  }
}
