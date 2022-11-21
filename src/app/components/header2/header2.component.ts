import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {
  modaleShow:boolean=false;
  realEstateShow:boolean = false;
  carShow:boolean = false;
  secondHandShow:boolean = false;
  demandedShow:boolean = false;
  bussinesShow:boolean = false;
  petsShow:boolean = false;
  proffesionalsShow:boolean = false;
  moreShow:boolean = false;
  noticeShow:boolean = false;
  likedShow:boolean = false;
  userMenuShow:boolean = false;

  abriviation:string='';
  subscriptionToCurrentUser:Subscription = new Subscription;
  currentUser:User|undefined=undefined;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.subscriptionToCurrentUser = this.authService.currentUser.
        subscribe(user => {
          if(user !== (undefined || null)){
            this.currentUser = user;
            this.abriviation = this.currentUser.name[0]+this.currentUser.surname[0];
          }
        })
  }


// consider to enter all these elements to array and work based on index
onClickModale(){
  this.modaleShow = !this.modaleShow;
}
onOverRealEstate() {
  this.realEstateShow = !this.realEstateShow;
}
onOverCars() {
  this.carShow = !this.carShow;
}
onOverSecondHand() {
  this.secondHandShow = !this.secondHandShow;
}
onOverDemanded(){
  this.demandedShow = !this.demandedShow;
}
onOverBussines(){
  this.bussinesShow = !this.bussinesShow;
}
onOverPets(){
  this.petsShow = !this.petsShow;
}
onOverProffesionals(){
  this.proffesionalsShow = !this.proffesionalsShow;
}
onOverMore(){
  this.moreShow = !this.moreShow;
}
onOverNotice(){
  this.noticeShow = !this.noticeShow;
}
onLikeShow(){
  this.likedShow = !this.likedShow;
}
onUserMenu(){
  this.userMenuShow = !this.userMenuShow;
}
passShowModale(event:boolean){
  this.modaleShow = event;
}
onUserClick(){
  this.router.navigate(['/auth']);
}
onNewPostClick(){
  this.router.navigate(['/new-post']);
}
}
