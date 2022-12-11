import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { format } from 'path';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  hidePassword:boolean = false;
  showSecondRegistrationPhase:boolean=false;
  email:string='';
  password:string='';

  constructor(private router:Router, public authService:AuthService) { }

  ngOnInit(): void {
  }

  onSignup(form:NgForm){

    if(!form.valid){
      return;
    }
    let user = new User(form.value.name,this.password,form.value.surname,form.value.phone,this.email,this.authService.users.length + 1)
    this.authService.users.push(user);
    this.authService.currentUser.next(user);
    this.showSecondRegistrationPhase=false;
    this.router.navigate(['/home']);

  }

  onClickHidePassword(){
    this.hidePassword = !this.hidePassword;
  }
  onClickSignin(){
    this.router.navigate(['/auth']);
  }
  onClickContinue(form:NgForm){
    this.email = form.value.email
    this.password = form.value.password
    this.showSecondRegistrationPhase=true;
  }
}
