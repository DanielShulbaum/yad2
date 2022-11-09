import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {
  assetDetails!:FormGroup;
  roomsOptions:number[]=[
    1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5
  ];
  options:any[]=['ללא',1,2,3];
  chosenParkingLots:number=0;
  chosenBalconiesNum:number=0;

  hasAirCondition:boolean=false;
  hasShelter:boolean=false;
  hasStorage:boolean=false;
  hasFurniture:boolean=false;
  hasIncapableAccess:boolean=false;
  hasLift:boolean=false;
  hasTadiran:boolean=false;
  isRenovated:boolean=false;
  hasKosherKitchen:boolean=false;
  hasSunBoiler:boolean=false;
  hasGrating:boolean=false;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.assetDetails = this.fb.group({
      assetRoomsNumber: this.fb.control('', Validators.required),
    });

  }
  onSubmitDetailsForm(){

  }
  onParkingClick(choice:any){

    if(choice ==='ללא'){
      this.chosenParkingLots=0;
    }else{
      this.chosenParkingLots = choice;
    }
  }
  onBalconyClick(choice:any){
    if(choice ==='ללא'){
      this.chosenBalconiesNum=0;
    }else{
      this.chosenBalconiesNum = choice;
    }
  }
  onAirConditionClick(){
    this.hasAirCondition=!this.hasAirCondition
  }
  onShelterClick(){
    this.hasShelter = !this.hasShelter;
  }
  onStorageClick(){
    this.hasStorage = !this.hasStorage;
  }
  onFurnitureClick(){
    this.hasFurniture = !this.hasFurniture;
  }
  onIncapableAccessClick(){
    this.hasIncapableAccess = !this.hasIncapableAccess;
  }
  onLiftClick(){
    this.hasLift = !this.hasLift;
  }
  onAirConditionTadiranClick(){
    this.hasTadiran = !this.hasTadiran;
  }
  onRenovatedClick(){
    this.isRenovated = !this.isRenovated;
  }
  onKosherKitchenClick(){
    this.hasKosherKitchen = !this.hasKosherKitchen;
  }
  onSunBoilerClick(){
    this.hasSunBoiler = !this.hasSunBoiler;
  }
  onGratingClick(){
    this.hasGrating = !this.hasGrating;
  }
}
