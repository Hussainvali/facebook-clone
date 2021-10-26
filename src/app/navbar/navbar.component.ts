import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _StorageService:StorageService,private router:Router) { }

  ngOnInit(): void {
  }

  onClickLogout(){
    this._StorageService.removeAll()
    this.router.navigate(['home'])
  }

}
