import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private url = environment.url;

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<any>{
    return this.httpClient.get(`${this.url}/entidad/all`);
  }

  public create() {

  }

  public update(){

  }

  public delete(){

  }


}
