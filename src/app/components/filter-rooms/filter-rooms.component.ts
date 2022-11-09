import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-rooms',
  templateUrl: './filter-rooms.component.html',
  styleUrls: ['./filter-rooms.component.scss']
})
export class FilterRoomsComponent implements OnInit {

  @Output() transferMinRooms = new EventEmitter<number>()
  @Output() transferMaxRooms = new EventEmitter<number>()

  startingRoomListShow:boolean = false;
  finalRoomListShow:boolean = false;
  startingText:string|number = 'מ-';
  finalText:string|number = 'עד-'
  startingRoom:number=0;
  finalRoom:number=12;
  rooms:number[] = [
    1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClickStartRoomChoice(){
    this.startingRoomListShow = !this.startingRoomListShow;
    this.finalRoomListShow = false;
  }
  onClickFinalRoomChoice(){
    this.finalRoomListShow = !this.finalRoomListShow;
    this.startingRoomListShow = false;
  }
  onClickAll(part:number){
    if(part === 1){
      this.startingText = 'הכל'
      this.startingRoom=0;
      this.startingRoomListShow = !this.startingRoomListShow;
      this.transferMinRooms.emit(this.startingRoom);
    }
    else{
      this.finalText = 'הכל';
      this.finalRoom = 12;
      this.finalRoomListShow = !this.finalRoomListShow;
      this.transferMaxRooms.emit(this.finalRoom);
    }
  }
  onClickRoom(part:number, room:number){
    if(part ===1){
      this.startingRoom = room;
      this.startingText = room;
      this.startingRoomListShow = !this.startingRoomListShow;
      this.transferMinRooms.emit(this.startingRoom);
    }else{
      this.finalRoom = room;
      this.finalText = room;
      this.finalRoomListShow = !this.finalRoomListShow;
      this.transferMaxRooms.emit(this.finalRoom);
    }
  }
}
