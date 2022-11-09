import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'auth', component:AuthPageComponent},
  {path: 'sign-up', component:SignUpPageComponent},
  {path: 'new-post', component:NewPostComponent},
  {path: '',redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
