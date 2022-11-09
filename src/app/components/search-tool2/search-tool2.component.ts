import {  Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tool2',
  templateUrl: './search-tool2.component.html',
  styleUrls: ['./search-tool2.component.scss']
})
export class SearchTool2Component implements OnInit {
  numberOfAssetsChecked:number=0;
  chosenAppTypes:boolean[]=[];
  chosenHousesTypes:boolean[]=[];
  chosenOtherTypes:boolean[]=[];
  chosenMinRooms:number=0;
  chosenMaxRooms:number=12;

   //variables of showing menus
   propertiesShow:boolean = false;
   roomsFilterShow:boolean = false;
   advancedSearchShow:boolean = true;
   startingFloorListShow = false;
   finalFloorListShow = false;

   //icons of checkboxs
   parking:boolean=false;
   lift:boolean=false;
   airCondition:boolean=false;
   balcony:boolean=false;
   shelter:boolean=false;
   grating:boolean=false;
   storage:boolean=false;
   handicapped:boolean=false;
   renovated:boolean=false;
   furnitured:boolean=false;
   exclusive:boolean=false;

   //to get a date that was chosen
   appartementEntrance:Date | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  passMinRoom(event:number){
    this.chosenMinRooms=event;

  }
  passMaxRoom(event:number){
    this.chosenMaxRooms=event;
  }

  passHouseType(event:boolean[]){
    this.chosenHousesTypes = event;
    console.table(this.chosenHousesTypes);
  }
  passOtherType(event:boolean[]){
    this.chosenOtherTypes = event;
    console.table(this.chosenOtherTypes);
    this.propertiesShow = !this.propertiesShow;
  }
  passAppType(event:boolean[]){
    this.chosenAppTypes = event;
    console.table(this.chosenAppTypes);
  }

  passNum(event:number){
    this.numberOfAssetsChecked = event;
  }

  onClickProperties(){
    this.propertiesShow = !this.propertiesShow;
  }
  onClickRooms(){
    this.roomsFilterShow = !this.roomsFilterShow;
  }
  onClickAdvancedSearch(){
    this.advancedSearchShow = !this.advancedSearchShow;
  }
  onClickParking(){
    this.parking = !this.parking;
  }
  onClickLift(){
    this.lift = !this.lift
  }
  onClickAirCondition(){
    this.airCondition = !this.airCondition;
  }
  onClickBalcony(){
    this.balcony = !this.balcony;
  }
  onClickShelter(){
    this.shelter = !this.shelter;
  }
  onClickGrating(){
    this.grating = !this.grating
  }
  onClickStorage(){
    this.storage = !this.storage
  }
  onClickHandicapped(){
    this.handicapped = !this.handicapped
  }
  onClickRenovated(){
    this.renovated = !this.renovated
  }
  onClickFurnitured(){
    this.furnitured = !this.furnitured
  }
  onClickExclusive(){
    this.exclusive = !this.exclusive
  }

  onClickStartFloor(){
    this.startingFloorListShow = !this.startingFloorListShow;
    this.finalFloorListShow = false;
  }
  onClickFinalFloor(){
    this.finalFloorListShow = !this.finalFloorListShow;
    this.startingFloorListShow = false;
  }
}
