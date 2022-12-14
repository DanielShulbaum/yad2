import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-floor2',
  templateUrl: './filter-floor2.component.html',
  styleUrls: ['./filter-floor2.component.scss']
})
export class FilterFloor2Component implements OnInit {
  floors:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  chosenFinishFloor:number|undefined;

  @Output() transferMaxFloor = new EventEmitter<number>()
  @Input() chosenMinFloorC:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onClickAll(){
    this.chosenFinishFloor = undefined;
  }
  onClickFloor(floor:number){
    this.chosenFinishFloor = floor;
    this.transferMaxFloor.emit(this.chosenFinishFloor);
  }
  onClickBasement(){
    this.chosenFinishFloor = -1;
  }

}
