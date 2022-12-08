import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  loggedUser:boolean = false;
  constructor(private authService:AuthService, public router:Router) { }

  ngOnInit(): void {

    if(this.authService.currentUser.value ===null){
      this.loggedUser=false
    }else{
      this.loggedUser=true;
    }

  }

  onClickSignOut(){
    this.authService.currentUser.next(null);
    this.router.navigate(['/home'])
  }

}
