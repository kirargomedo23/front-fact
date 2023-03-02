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

  public getById(id:number): Observable<any>{
    return this.httpClient.get(`${this.url}/entidad/${id}`);
  }

  public search(search:string): Observable<any>{
    return this.httpClient.get(`${this.url}/entidad/all/search?search=${search}`);
  }

  public filter(value: boolean): Observable<any> {
    return this.httpClient.get(`${this.url}/entidad/all/filter?isActive=${value}`);
  }

  public create(data: any): Observable<any>  {
    return this.httpClient.post(`${this.url}/entidad/`, data);
  }

  public update(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.url}/entidad/${id}`, data);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.url}/entidad/${id}`);
  }


}
