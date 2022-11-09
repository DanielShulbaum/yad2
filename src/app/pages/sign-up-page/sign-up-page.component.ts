import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  hidePassword:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSignup(form:NgForm){

  }

  onClickHidePassword(){
    this.hidePassword = !this.hidePassword;
  }
}
