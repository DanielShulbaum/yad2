import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tool2',
  templateUrl: './search-tool2.component.html',
  styleUrls: ['./search-tool2.component.scss']
})
export class SearchTool2Component implements OnInit {
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
