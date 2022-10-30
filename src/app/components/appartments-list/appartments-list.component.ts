import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartments-list',
  templateUrl: './appartments-list.component.html',
  styleUrls: ['./appartments-list.component.scss']
})
export class AppartmentsListComponent implements OnInit {
  sortValues:string[] = ['לפי תאריך',"מחיר - מהזול ליקר","מחיר - מהיקר לזול"];
  sortBy = this.sortValues[0];

  mainSortShow:boolean=false;
  secondarySortShow:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onClickMainSort(){
    this.mainSortShow = !this.mainSortShow;
  }
  onClickSortDate(){
    this.mainSortShow=false
    this.sortBy = this.sortValues[0];
  }
  onClickSortPriceLow(){
    this.mainSortShow=false
    this.sortBy = this.sortValues[1];
  }
  onClickSortPriceHigh(){
    this.mainSortShow=false
    this.sortBy = this.sortValues[2];
  }
  onClickSecondarySort(){
    this.secondarySortShow = !this.secondarySortShow;
  }
}
