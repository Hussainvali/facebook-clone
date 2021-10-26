import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
    private router: Router,private _StorageService: StorageService,) { }

    token :any;
    API_URL=environment.API_URL;

    post(url:any, body = {}) {
      return this.http.post(this.API_URL + url, body);
    }
    get(url:any) {
      return this.http.get(this.API_URL + url);
    }

    postAuth(url:any, body = {}) {
      this.token = this._StorageService.getToken("token");
      let headers = new HttpHeaders({
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.token}`
      });
      let options = {
        headers: headers
      }
      return this.http.post(this.API_URL + url, body, options);
    }

    postAuthForm(url:any, body = {}) {
      this.token = this._StorageService.getToken("token");
      let headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      });
      let options = {
        headers: headers
      }
      return this.http.post(this.API_URL + url, body, options);
    }

    getAuth(url:any) {

      this.token =this._StorageService.getToken("token");
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });
      let options = {
        headers: headers
      }
  
      return this.http.get(this.API_URL + url, options);
    }
}


