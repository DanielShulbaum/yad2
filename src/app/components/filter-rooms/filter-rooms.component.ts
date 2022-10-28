import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-rooms',
  templateUrl: './filter-rooms.component.html',
  styleUrls: ['./filter-rooms.component.scss']
})
export class FilterRoomsComponent implements OnInit {
  startingFloorListShow:boolean = false;
  finalFloorListShow:boolean = false;
  startingText:string|number = 'מ-';
  finalText:string|number = 'עד-'
  startingFloor:number|null=null;
  finalFloor:number|null=null;
  floors:number[] = [
    1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClickStartFloorChoice(){
    this.startingFloorListShow = !this.startingFloorListShow;
    this.finalFloorListShow = false;
  }
  onClickFinalFloorChoice(){
    this.finalFloorListShow = !this.finalFloorListShow;
    this.startingFloorListShow = false;
  }
  onClickAll(part:number){
    if(part === 1){
      this.startingText = 'הכל'
    }
    else{
      this.finalText = 'הכל';
    }
  }
  onClickFloor(part:number, floor:number){
    if(part ===1){
      this.startingFloor = floor;
      this.startingText = floor;
    }else{
      this.finalFloor = floor;
      this.finalText = floor;
    }
  }


}
