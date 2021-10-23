import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public ApiService: ApiService,private _Router:Router) { }

  ngOnInit(): void {
  }

  onClickRegister(data:any){
    console.log("Data",data);
    this.ApiService.post('register',data).subscribe((result)=>{
      console.log(result)
    });
  }

  onClickLogin(data:any){
    console.log("logindata",data);
    this.ApiService.post('login',data).subscribe((result) => {
      console.log(result)
    });
  }

}
