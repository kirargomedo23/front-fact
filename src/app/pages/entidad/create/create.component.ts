import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntidadService } from '@app/services/entidad/entidad.service';
import { UtilService } from '@app/services/util/util.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formEntidad: FormGroup = this.formBuilder.group({});
  formTipoDocumento: FormGroup = this.formBuilder.group({});
  formTipoContribuyente: FormGroup = this.formBuilder.group({});

  public titleSlideToggle: string = 'Activo';
  public loading: boolean = false;

  constructor(
    private readonly entidadService: EntidadService,
    private readonly utilService: UtilService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ){
    this.formCreateEntidad();
    this.formCreateTipoDocumento();
    this.formCreateTipoContribuyente();
  }

  ngOnInit(): void {

  }

  formCreateEntidad(){
    this.formEntidad = this.formBuilder.group({
      nro_documento: [null, [Validators.required]],
      razon_social: [null, [Validators.required]],
      nombre_comercial: [null ],
      direccion: [null ],
      telefono: [null],
      estado: [true]
    });
  }

  formCreateTipoDocumento(){
    this.formTipoDocumento = this.formBuilder.group({
      codigo: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      descripcion: [null],
      estado: [null  ],
    });
  }

  formCreateTipoContribuyente(){
    this.formTipoContribuyente = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      estado: [null],
    });
  }

  getFormControl(formGroup: FormGroup, control: string){
    return formGroup.get(control);
  }

  changeSlide($ev:MatSlideToggleChange){
    this.titleSlideToggle = ($ev.checked) ? 'Activo': 'Inactivo';
  }

  create(){

    const isValid = this.validaForm();

    if(!isValid) return;

    const dataEntidad = this.formEntidad.value;
    const dataTipoContribuyente = this.formTipoContribuyente.value;
    const dataTipoDocumento = this.formTipoDocumento.value;

    const data = {
      ...dataEntidad,
      documento:{
        ...dataTipoDocumento
      },
      contribuyente:{
        ...dataTipoContribuyente
      }
    }
    this.loading = true;
    this.entidadService.create(data)
    .subscribe({
      next: ()  => {
        this.loading = false;
        this.utilService.openMessageSucces('Se ha guardado correctamente');
        this.resetForm();
      },
      error: ()  => {
        this.loading = false;
        this.utilService.openMessageError( 'Ocurrió un error al obtener la lista de entidades');
      }
    });

  }

  validaForm(){
    const isInvalidEntidad = this.formEntidad.invalid;

    if(isInvalidEntidad){
      this.utilService.openMessageError('Formulario de Entidad inválido. Por favor, corrija los errores');
      return false;
    }

    const isInvalidTipoContribuyente = this.formTipoContribuyente.invalid;

    if(isInvalidTipoContribuyente){
      this.utilService.openMessageError('Formulario Tipo COntribuyente inválido. Por favor, corrija los errores');
      return false;
    }

    const isInvalidTipoDocumento = this.formTipoDocumento.invalid;

    if(isInvalidTipoDocumento){
      this.utilService.openMessageError('Formulario Tipo de Documento inválido. Por favor, corrija los errores');
      return false;
    }

    return true;
  }

  resetForm(){
    this.formEntidad.reset();
    this.formTipoDocumento.reset();
    this.formTipoContribuyente.reset();
  }

  navigateToPage(url:string){
    this.router.navigate([url]);
  }
}
