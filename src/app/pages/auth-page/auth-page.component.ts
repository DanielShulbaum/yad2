import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit,OnDestroy {
  hidePassword:boolean = true;
  errorMessageSubscription: Subscription = new Subscription;
  showErrorMessage:boolean=false;
  constructor(public authService:AuthService, public router:Router, private _location: Location) { }

  ngOnInit(): void {
    this.errorMessageSubscription = this.authService.errorMessage.
        subscribe(showMessage=>{this.showErrorMessage=showMessage})
  }

  onSubmit(form:NgForm){
    this.showErrorMessage=false;
    if(!form.valid){
      return;
    }
    this.authService.signIn(form);
  }
  onClickHidePassword(){
    this.hidePassword = !this.hidePassword;
  }
  onClickSignUp(){
    this.router.navigate(['/sign-up']);
  }
  onClickBack(){
    this._location.back();
  }
  ngOnDestroy(): void {
    this.errorMessageSubscription.unsubscribe();
  }

}
