import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // currentUser = new BehaviorSubject<User | null>(null);
  errorMessage = new BehaviorSubject<boolean>(false);
  usersCounter:number =  3;
  constructor(private router:Router) { }

  public users:User[] = [
    new User(
      'Almog','Hyperact3','Putin', 536983963,'almog@gmail.com',1),
    new User(
      'Seba','Hyperact3','Gever', 536983963,'Seba@gmail.com',2),
    new User(
      'Udi','Hyperact3','Shirabi', 536983963,'Udi@gmail.com',3)
  ]
  //line below for checking
  currentUser = new BehaviorSubject<User | null>(this.users[1]);

  signIn(form:NgForm){
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
          this.router.navigate(['/home']);
          }else{
            this.errorMessage.next(true);
            // errorMessage = 'Password not correct';
            // throw new Error(errorMessage);
          }
        }
      }if(!approvedUser) {
        this.errorMessage.next(true);
        // errorMessage = 'Username is not valid';
        //   throw new Error(errorMessage);
      }
    }catch(error){
      this.errorMessage.next(true);
      form.reset();
      {alert(error)}
    }
  }
}
