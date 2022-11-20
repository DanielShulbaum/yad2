import { Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-appartments-list',
  templateUrl: './appartments-list.component.html',
  styleUrls: ['./appartments-list.component.scss']
})
export class AppartmentsListComponent implements OnInit {
  @ViewChildren("checkboxes") checkboxes!: QueryList<ElementRef>;

  sortValues:string[] = ['לפי תאריך',"מחיר - מהזול ליקר","מחיר - מהיקר לזול"];
  sortBy = this.sortValues[0];
  sortOption=0;
  mainSortShow:boolean=false;
  secondarySortShow:boolean=false;
  filterWithPriceOnly=false;
  filterWithPicturesOnly=false;

  @Output() transferSortChoice = new EventEmitter<number>();
  @Output() transferFilterPrice = new EventEmitter<boolean>();
  @Output() transferFilterPictures = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickMainSort(event:any){
    event.stopPropagation();
    this.mainSortShow = !this.mainSortShow;
    console.log('clicked main sort');
  }
  onClickSortDate(event:any){
    event.stopPropagation();
    this.sortBy = this.sortValues[0];
    this.mainSortShow=!this.mainSortShow;
    this.sortOption=0;
    this.transferSortChoice.emit(this.sortOption);
  }
  onClickSortPriceLow(event:any){
    event.stopPropagation();
    this.sortBy = this.sortValues[1];
    this.mainSortShow=!this.mainSortShow;
    this.sortOption=1;
    this.transferSortChoice.emit(this.sortOption);
  }
  onClickSortPriceHigh(event:any){
    event.stopPropagation();
    this.sortBy = this.sortValues[2];
    this.mainSortShow=!this.mainSortShow;
    this.sortOption=2;
    this.transferSortChoice.emit(this.sortOption);
  }
  onClickSecondarySort(){
    this.secondarySortShow = !this.secondarySortShow;
  }
  onClickFilterPrice(){
    console.log('click price filter ' + this.filterWithPriceOnly);
    this.filterWithPriceOnly = !this.filterWithPriceOnly;
    console.log('click price filter2 ' + this.filterWithPriceOnly);
  }
  onClickFilterPicture(){
    this.filterWithPicturesOnly = !this.filterWithPicturesOnly;
  }
  onClearFilterChoice(){
  this.checkboxes.forEach((element) => {
    element.nativeElement.checked = false;
  });
    this.filterWithPriceOnly=false;
    this.filterWithPicturesOnly=false;
    this.transferFilterPictures.emit(this.filterWithPicturesOnly);
    this.transferFilterPrice.emit(this.filterWithPriceOnly);
  }
  onClickFilter(){
    console.log('click filter ' + this.filterWithPriceOnly);
    this.transferFilterPictures.emit(this.filterWithPicturesOnly);
    this.transferFilterPrice.emit(this.filterWithPriceOnly);
    this.secondarySortShow = !this.secondarySortShow;
  }
}
