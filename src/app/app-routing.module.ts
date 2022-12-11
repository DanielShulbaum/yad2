import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SignGuard } from './guards/sign.guard';
import { NotFoundComponent } from './pages/404/not-found.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'auth', component:AuthPageComponent, canActivate: [SignGuard]},
  {path: 'sign-up', component:SignUpPageComponent, canActivate: [SignGuard]},
  {path: 'new-post', component:NewPostComponent, canActivate: [AuthGuard]},
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
