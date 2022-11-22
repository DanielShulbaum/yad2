import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-floor',
  templateUrl: './filter-floor.component.html',
  styleUrls: ['./filter-floor.component.scss']
})
export class FilterFloorComponent implements OnInit {
  floors:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  chosenStartFloor:number=0;


  @Output() transferMinFloor = new EventEmitter<number>()
  @Input() chosenMaxFloorC:number=17;
  constructor() { }

  ngOnInit(): void {
  }
  onClickAll(){
    this.chosenStartFloor = 0;
  }
  onClickFloor(floor:number){
    this.chosenStartFloor = floor;
    this.transferMinFloor.emit(this.chosenStartFloor);
  }
  onClickBasement(){
    this.chosenStartFloor = -1;
  }
}
