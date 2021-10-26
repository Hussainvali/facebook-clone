import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public ApiService: ApiService,private _Router:Router,private _StorageService:StorageService) { }

  ngOnInit(): void {
  }

  onClickRegister(data:any){
    this.ApiService.post('user/register',data).subscribe((result:any)=>{
      if(result['status'] === 'success'){
        alert("registration sucess")
        this.ngOnInit();
      }else{
        alert(result.message);
      }
    });
  }

  onClickLogin(data:any){
    this.ApiService.post('user/login',data).subscribe((result:any) => {
      console.log("result",result);
      if(result['status'] === 'success'){
        this._StorageService.setToken("token",result['data']['token']);
        this._Router.navigate(['user/post'])
      }else{
        alert(result.message);
      }
    });
  }

}
