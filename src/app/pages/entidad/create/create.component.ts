import { Component, OnInit } from '@angular/core';
import { EntidadService } from '@app/services/entidad/entidad.service';
import { UtilService } from '@app/services/util/util.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private readonly entidadService: EntidadService,
    private readonly utilService: UtilService
  ){

  }

  ngOnInit(): void {

  }
}
