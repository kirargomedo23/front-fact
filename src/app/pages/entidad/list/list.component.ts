import { Component, OnInit } from '@angular/core';
import { EntidadService } from '@app/services/entidad/entidad.service';
import { UtilService } from '@app/services/util/util.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {

  constructor(
    private readonly utilService: UtilService,
    private readonly entidadService: EntidadService
  ){

  }

  ngOnInit(): void {
    this.getAllContribuyentes();
  }

  getAllContribuyentes(){

  }
}
