import { Component, OnInit, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss']
})
export class ModaleComponent implements OnInit {
  realEstate:string[] = ['דירות למכירה',"דירות להשכרה","דירות שותפים",'נדל"ן מסחרי',"חיפוש נכסים על גבי מפה","כונס נכסים",
      "דורון - העוזר האישי", "יד1 דירות חדשות","הערכת שווי נכס",
      "משרדי תיווך בישראל", "יד2 ביטוח דירה"];
      realEstateShow:boolean=false;
      carsShow:boolean=false;
      secondHandShow:boolean=false;
      demandedShow:boolean=false;
      bussinesShow:boolean=false;
      petsShow:boolean=false;
      showModale:boolean=true;
      @Output() transferCloseModale = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onClickCloseModale(){
    this.showModale=false;
    this.transferCloseModale.emit(this.showModale);
  }
  onClickRealEstate(){
    this.realEstateShow = !this.realEstateShow;
  }
  onClickCars(){
    this.carsShow = !this.carsShow;
  }
  onClickSecondHand(){
    this.secondHandShow = !this.secondHandShow;
  }
  onClickDemanded(){
    this.demandedShow = !this.demandedShow;
  }
  onClickBussines(){
    this.bussinesShow = !this.bussinesShow;
  }
  onClickPets(){
    this.petsShow = !this.petsShow;
  }
}
