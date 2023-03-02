import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from '@app/services/tipo-documento/tipo-documento.service';
import { UtilService } from '@app/services/util/util.service';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.scss']
})
export class TipoDocumentoComponent implements OnInit {

  public title: String = 'Actualizar Tipo de Documento';

  constructor(
    private readonly utilService: UtilService,
    private readonly tipoDocumentoService: TipoDocumentoService
  ){

  }

  ngOnInit(): void {

  }
}
