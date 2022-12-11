import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-floor2',
  templateUrl: './filter-floor2.component.html',
  styleUrls: ['./filter-floor2.component.scss']
})
export class FilterFloor2Component implements OnInit {
  floors:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  @Input()chosenFinishFloor!:number|string|undefined;

  @Output() transferMaxFloor = new EventEmitter<number|string>()
  @Input() chosenMinFloorC!:number|string;
  constructor() { }

  ngOnInit(): void {
  }
  onClickAll(){
    this.chosenFinishFloor = undefined;
    this.transferMaxFloor.emit(this.chosenFinishFloor);
  }
  onClickFloor(floor:number){
    this.chosenFinishFloor = floor;
    this.transferMaxFloor.emit(this.chosenFinishFloor);
  }
  onClickBasement(){
    this.chosenFinishFloor =" מרתף/פרטר";
    this.transferMaxFloor.emit(this.chosenFinishFloor);
  }

}
