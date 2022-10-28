import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.scss']
})
export class SearchToolComponent implements OnInit {
  propertiesShow:boolean = false;
  floorsFilterShow:boolean = false;
  advancedSearchShow:boolean = true;

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

  appartementEntrance:Date | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  onClickProperties(){
    this.propertiesShow = !this.propertiesShow;
  }
  onClickFloors(){
    this.floorsFilterShow = !this.floorsFilterShow;
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

}
