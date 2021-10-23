import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
    private router: Router) { }


    API_URL=environment.API_URL;

    post(url:any, body = {}) {
      return this.http.post(this.API_URL + url, body);
    }
    get(url:any) {
      return this.http.get(this.API_URL + url);
    }
}
