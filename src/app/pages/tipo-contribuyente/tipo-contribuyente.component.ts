import { UtilService } from './../../services/util/util.service';
import { TipoContribuyente } from '@interfaces/tipo-contribuyente.interface';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoContribuyenteService } from '@app/services/tipo-contribuyente/tipo-contribuyente.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from '@app/shared/components/modal-confirmation/modal-confirmation.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tipo-contribuyente',
  templateUrl: './tipo-contribuyente.component.html',
  styleUrls: ['./tipo-contribuyente.component.scss']
})
export class TipoContribuyenteComponent implements OnInit {

  public title: String = 'Actualizar Tipo de Contribuyente';

  formTipoContribuyente: FormGroup;

  public titleSlideToggle: string = 'Activo';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly matDialog: MatDialog,
    private readonly utilService: UtilService,
    private readonly formBuilder: FormBuilder,
    private readonly tipoContribuyenteService: TipoContribuyenteService
  ){
      this.formTipoContribuyente = this.formBuilder.group({
        nombre:[null, [Validators.required]],
        estado:[null, [Validators.required]]
      });
  }

  ngOnInit(): void {
    const id  = this.activatedRoute.snapshot.paramMap.get("id");

    this.getContribuyente();
  }

  get getValueFormTipoContribuyente(){
    return this.formTipoContribuyente.value;
  }

  getFormTipoContribuyenteControls(control: string) {
    return this.formTipoContribuyente.get(control);
  }

  getContribuyente(){
    this.tipoContribuyenteService.getOneById(1).subscribe( (data:any)=> {
      console.log("data: ", data);
    }, error => {
        this.utilService.openMessageError( 'Ocurrió un error al obtener el contribuyente');
    } );
  }

  updateValueForm(data: TipoContribuyente){
    this.getFormTipoContribuyenteControls('nombre')?.setValue(data.nombre);
    this.getFormTipoContribuyenteControls('estado')?.setValue(data.estado);
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
