import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  errorMessage = new BehaviorSubject<boolean>(false);
  usersCounter:number =  3;

  //
  returnUrl:string='';
  //

  constructor(private router:Router) { }

  public users:User[] = [
    new User(
      'Almog','Hyperact3','Putin', 536983963,'almog@gmail.com',1),
    new User(
      'Seba','Hyperact3','Talp', 536983963,'Seba@gmail.com',2),
    new User(
      'Udi','Hyperact3','Shirabi', 536983963,'Udi@gmail.com',3)
  ]
  currentUser = new BehaviorSubject<User | null>(null);

  signIn(form:NgForm):BehaviorSubject<User|null>|void{
    try{
      const email = form.value.email;
      const password = form.value.password;
      let approvedUser = false;
      for(let index=0; index<this.users.length; index++){
        if(this.users[index].email === email){
          if(this.users[index].password === password){
            approvedUser = true;
            const tempUser=new User(
              this.users[index].name,
              this.users[index].password,
              this.users[index].surname,
              this.users[index].phone,
              this.users[index].email,
              this.users[index].idUser,
            )
          this.currentUser.next(tempUser);
          console.log('authservice ' + this.currentUser );


          return this.currentUser;

          }else{
            this.errorMessage.next(true);
          }
        }
      }if(!approvedUser) {
        this.errorMessage.next(true);
      }
    }catch(error){
      form.reset();
      this.errorMessage.next(true);
      {alert(error)}
    }
  }
}
