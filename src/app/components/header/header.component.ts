import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }
  // consider to enter all these elements to array and work based on index
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
}
