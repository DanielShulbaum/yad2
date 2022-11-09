import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  hidePassword:boolean = true;
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    // need to add authService.signIn(form)
  }
  onClickHidePassword(){
    this.hidePassword = !this.hidePassword;
  }
}
