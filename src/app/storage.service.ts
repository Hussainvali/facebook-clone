import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  getToken(key: string) {
    return localStorage.getItem(key)
  }

  setToken(key: string, value: string) {
    return localStorage.setItem(key, value)
  }

  removeAll() {
    return localStorage.clear()
  }
}
