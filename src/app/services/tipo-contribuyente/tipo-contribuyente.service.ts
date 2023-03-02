import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoContribuyente } from '@app/interfaces/tipo-contribuyente.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoContribuyenteService {

  private url = environment.url;

  constructor(private httpClient: HttpClient) { }

  getOneById(id:number): Observable<TipoContribuyente>{
    return this.httpClient.get<TipoContribuyente>(`${this.url}/contribuyente/${id}`);
  }

  updateById(id:number, data: TipoContribuyente){
    return this.httpClient.put(`${this.url}/contribuyente/${id}`, data);
  }

}
