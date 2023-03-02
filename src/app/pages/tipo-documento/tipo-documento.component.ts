import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoDocumento } from '@app/interfaces/tipo-documento.interface';
import { TipoDocumentoService } from '@app/services/tipo-documento/tipo-documento.service';
import { UtilService } from '@app/services/util/util.service';
import { ModalConfirmationComponent } from '@app/shared/components/modal-confirmation/modal-confirmation.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.scss']
})
export class TipoDocumentoComponent implements OnInit {

  public title: String = 'Actualizar Tipo de Documento';
  public titleSlideToggle: string = 'Activo';
  public idTipoDocumento: number  = 0;


  public loading: boolean = true;

  formTipoDocumento: FormGroup = this.formBuilder.group({});

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly matDialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly utilService: UtilService,
    private readonly tipoDocumentoService: TipoDocumentoService
  ){
    this.formCreateTipoDocumento();
  }

  ngOnInit(): void {
    this.idTipoDocumento = Number(this.activatedRoute.snapshot.paramMap.get("id"));

    if( isNaN(this.idTipoDocumento )){
      this.router.navigate(['app/entidad-list']);
    }

    this.getDocumento();
  }


  formCreateTipoDocumento(){
    this.formTipoDocumento = this.formBuilder.group({
      codigo:[null, [Validators.required]],
      nombre:[null, [Validators.required]],
      descripcion:[null],
      estado:[null, [Validators.required]]
    });
  }

  get getValueFormTipoDocumento(){
    return this.formTipoDocumento.value;
  }

  getFormTipoDocumentoControls(control: string) {
    return this.formTipoDocumento.get(control);
  }

  getDocumento(){
    this.tipoDocumentoService.getOneById(this.idTipoDocumento)
    .subscribe({
      next: (data:TipoDocumento)  => {
        this.updateValueForm(data);
        this.loading = false;
      },
      error: ()  => {
        this.loading = false;
        this.utilService.openMessageError( 'Ocurrió un error al obtener el documento');
      }
    });
  }

  updateValueForm(data: TipoDocumento){
    this.getFormTipoDocumentoControls('nombre')?.setValue(data.nombre);
    this.getFormTipoDocumentoControls('codigo')?.setValue(data.codigo);
    this.getFormTipoDocumentoControls('descripcion')?.setValue(data.descripcion);
    this.getFormTipoDocumentoControls('estado')?.setValue(data.estado);
  }

  openModal(){

    const isInvalidForm = this.formTipoDocumento.invalid;

    if( isInvalidForm ){
      return this.utilService.openMessageError('Formulario inválido. Por favor, corrija los erróneos');
    }

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
    const value = this.formTipoDocumento.value;
    this.tipoDocumentoService.updateById(this.idTipoDocumento, value)
    .subscribe({
      next: ()  => {
        this.utilService.openMessageSucces( 'Se ha actualizado de manera correcta');
        this.loading = false;
        this.getDocumento();
      },
      error: ()  => {
        this.loading = false;
        this.utilService.openMessageError( 'Ocurrió un error al obtener el documento');
      }
    });

  }

  changeSlide(event:MatSlideToggleChange){
    this.titleSlideToggle = (event.checked) ? 'Activo': 'Inactivo';
  }

}
