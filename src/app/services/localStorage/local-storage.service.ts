import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addData = (key: string, data: string | Object  ) => {
    if (typeof data != "string" ) data = JSON.stringify(data);
    localStorage.getItem(key);
  }

  getData = (key: string)=> localStorage.getItem(key);

  removeData = (key:string) => localStorage.removeItem(key);

  clearAll = () => localStorage.clear();

}
