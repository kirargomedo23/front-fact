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
    this.formTipoContribuyente = this.formBuilder.group({
      nro_documento: [null, [Validators.required]],
      razon_social: [null, [Validators.required]],
      nombre_comercial: [null ],
      direccion: [null ],
      telefono: [null],
      estado: [true]
    });
  }

  formCreateTipoDocumento(){
    this.formTipoContribuyente = this.formBuilder.group({
      codigo: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      descripcion: [null],
      estado: [null, [Validators.required] ],
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

  }
}
