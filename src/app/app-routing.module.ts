import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path : "",redirectTo:"home",pathMatch:"full"},
  { path: 'home', component:RegistrationComponent },
  { path: 'user', component:NavbarComponent,children:
  [
    { path: 'post', component: PostComponent, pathMatch: 'full' },
    { path: 'feed', component: FeedComponent, pathMatch: 'full' }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
