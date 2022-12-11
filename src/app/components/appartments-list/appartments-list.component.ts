import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-appartments-list',
  templateUrl: './appartments-list.component.html',
  styleUrls: ['./appartments-list.component.scss']
})
export class AppartmentsListComponent implements OnInit {
  @ViewChildren("checkboxes") checkboxes!: QueryList<ElementRef>;

  sortValues:string[] = ['לפי תאריך',"מחיר - מהזול ליקר","מחיר - מהיקר לזול"];
  sortBy = this.sortValues[0];
  @Input() sortOption=0;
  mainSortShow:boolean=false;
  secondarySortShow:boolean=false;
  secondarySortChecked:boolean=false;
  @Input() filterWithPriceOnly!:boolean;
  @Input() filterWithPicturesOnly!:boolean;

  @Output() transferSortChoice = new EventEmitter<number>();
  @Output() transferFilterPrice = new EventEmitter<boolean>();
  @Output() transferFilterPictures = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
    if(this.checkboxes!==undefined){
      this.checkboxes.forEach((element) => {
        if(element.nativeElement.checked){
          this.secondarySortChecked=true;
        }
      });
    }
  }
  // this.checkboxes.forEach((element) => {
  //   element.nativeElement.checked = false;
  // });


  onClickMainSort(event:any){
    event.stopPropagation();
    this.mainSortShow = !this.mainSortShow;
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
    this.filterWithPriceOnly = !this.filterWithPriceOnly;
    this.secondarySortChecked=true;
  }
  onClickFilterPicture(){
    this.filterWithPicturesOnly = !this.filterWithPicturesOnly;
    this.secondarySortChecked=true;
  }
  onClearFilterChoice(){
  this.checkboxes.forEach((element) => {
    element.nativeElement.checked = false;
  });
    this.secondarySortChecked=false;
    this.filterWithPriceOnly=false;
    this.filterWithPicturesOnly=false;
    this.transferFilterPictures.emit(this.filterWithPicturesOnly);
    this.transferFilterPrice.emit(this.filterWithPriceOnly);
  }
  onClickFilter(){
    this.transferFilterPictures.emit(this.filterWithPicturesOnly);
    this.transferFilterPrice.emit(this.filterWithPriceOnly);
    this.secondarySortShow = !this.secondarySortShow;
  }
}
