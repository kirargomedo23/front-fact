import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoDocumento } from '@app/interfaces/tipo-documento.interface';
import { TipoDocumentoService } from '@app/services/tipo-documento/tipo-documento.service';
import { UtilService } from '@app/services/util/util.service';
import { ModalConfirmationComponent } from '@app/shared/components/modal-confirmation/modal-confirmation.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.scss']
})
export class TipoDocumentoComponent implements OnInit {

  public title: String = 'Actualizar Tipo de Documento';
  public titleSlideToggle: string = 'Activo';



  formTipoDocumento: FormGroup;


  constructor(
    private readonly matDialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly utilService: UtilService,
    private readonly tipoDocumentoService: TipoDocumentoService
  ){
    this.formTipoDocumento = this.formBuilder.group({
      codigo:[null, [Validators.required]],
      nombre:[null, [Validators.required]],
      descripcion:[null],
      estado:[null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getDocumento();
  }

  get getValueFormTipoDocumento(){
    return this.formTipoDocumento.value;
  }

  getFormTipoDocumentoControls(control: string) {
    return this.formTipoDocumento.get(control);
  }

  getDocumento(){

  }

  updateValueForm(data: TipoDocumento){
    this.getFormTipoDocumentoControls('nombre')?.setValue(data.nombre);
    this.getFormTipoDocumentoControls('estado')?.setValue(data.estado);
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
    console.log("metodo update");

  }

  changeSlide(event:MatSlideToggleChange){
    this.titleSlideToggle = (event.checked) ? 'Activo': 'Inactivo';

  }

}
