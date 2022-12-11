import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit,OnDestroy {
  //
  returnUrl!:string;
  //
  hidePassword:boolean = true;
  errorMessageSubscription: Subscription = new Subscription;
  showErrorMessage:boolean=false;
  constructor(public authService:AuthService, public router:Router, private _location: Location,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessageSubscription = this.authService.errorMessage.
        subscribe(showMessage=>{this.showErrorMessage=showMessage})
//
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authService.returnUrl=this.returnUrl;
    console.log('authpage'+this.returnUrl);

//
  }


  onSubmit(form:NgForm){
    this.showErrorMessage=false;
    if(!form.valid){
      return;
    }
    this.authService.signIn(form)?.pipe(first())
    .subscribe({
      next:() =>{
        console.log('2nf authpage');

        const returnUrl=this.route.snapshot.queryParams['returnUrl']|| '/';
        console.log(this.returnUrl);

        this.router.navigateByUrl(returnUrl);
      }
    });
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
