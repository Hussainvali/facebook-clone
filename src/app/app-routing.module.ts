import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path : "",redirectTo:"home",pathMatch:"full"},
  // { path: 'home', component:NavbarComponent },
  { path: 'home', component:RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
