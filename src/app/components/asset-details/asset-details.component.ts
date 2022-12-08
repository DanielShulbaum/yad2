import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder,UntypedFormGroup, Validators } from '@angular/forms';
import { NewPostService } from 'src/app/services/new-post.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {
  @Output() transferClose3Stage = new EventEmitter<boolean>()
  @Output() transferComplete3Stage = new EventEmitter<boolean>()
  assetDetails!:UntypedFormGroup ;
  roomsOptions:number[]=[
    1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5
  ];
  options:any[]=['ללא',1,2,3];

  // chosenBalconiesNum:number=0;

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

  assetDescriptionLetters:string="";



  constructor(private fb: UntypedFormBuilder, private newPostService:NewPostService) {

  }

  ngOnInit(): void {

    this.assetDetails = this.fb.group({
      assetRoomsNumber: this.fb.control('', Validators.required),
      assetParkingLots:this.fb.control('', Validators.required),
      assetBalconiesNum:this.fb.control('', Validators.required),
    });

  }
  onSubmitDetailsForm(){
    if(!this.assetDetails.valid){
      return;
    }
      this.newPostService.onGetAssetDetails(this.assetDetails,
      this.hasAirCondition,this.hasShelter,this.hasStorage, this.hasFurniture, this.hasIncapableAccess, this.hasLift,
      this.hasTadiran,this.isRenovated,this.hasKosherKitchen,this.hasSunBoiler,this.hasGrating,
      this.assetDescriptionLetters );
      this.transferComplete3Stage.emit(true);
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

  onClickBack3Stage(){
    this.transferClose3Stage.emit(false);
  }
}
