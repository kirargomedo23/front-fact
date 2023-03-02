import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDocumento } from '@app/interfaces/tipo-documento.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private url = environment.url;

  constructor(private httpClient: HttpClient) { }

  getOneById(id:number): Observable<any>{
    return this.httpClient.get(`${this.url}/documento/${id}`);
  }

  updateById(id:number, data: TipoDocumento){
    return this.httpClient.put(`${this.url}/documento/${id}`, data);
  }



}
