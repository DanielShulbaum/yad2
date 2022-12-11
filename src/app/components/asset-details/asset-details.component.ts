import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  parkingChoice:string='';
  balconiesNum:string='';
  roomsChoice:string='';
  assetDetails!:UntypedFormGroup ;
  roomsOptions:number[]=[
    1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5
  ];
  options:any[]=['ללא',1,2,3];



  // chosenBalconiesNum:number=0;

  hasAirCondition:boolean=this.newPostService.hasAirCondition;
  hasShelter:boolean=this.newPostService.hasShelter;
  hasStorage:boolean=this.newPostService.hasStorage;
  hasFurniture:boolean=this.newPostService.hasFurniture;
  hasIncapableAccess:boolean=this.newPostService.hasIncapableAccess;
  hasLift:boolean=this.newPostService.hasLift;
  hasTadiran:boolean=this.newPostService.hasTadiran;
  isRenovated:boolean=this.newPostService.isRenovated;
  hasKosherKitchen:boolean=this.newPostService.hasKosherKitchen;
  hasSunBoiler:boolean=this.newPostService.hasSunBoiler;
  hasGrating:boolean=this.newPostService.hasGrating;


  // this.options[this.parkingChoice]
  assetDescriptionLetters:string=this.newPostService.assetDescription;
  percent:number = this.assetDescriptionLetters.length/400;
  length:number =270*(this.assetDescriptionLetters.length/150);
  barWidth:string =  length<=270? length+'px' : 270+'px'
  colors:string[]=["#f70776","#f8fcfb"];
  color:string ="#f70776";
  textBar:string="מרגיש לנו שהטקסט שכתבת קצר מידי "

  constructor(private fb: UntypedFormBuilder, private newPostService:NewPostService) {

  }

  ngOnInit(): void {

    this.roomsChoice=this.newPostService.assetRoomsNumber===0?'':''+this.newPostService.assetRoomsNumber
    this.parkingChoice=''+this.newPostService.assetParkingLots;
    this.balconiesNum=''+this.newPostService.assetBalconiesNum;
    this.assetDetails = this.fb.group({
      assetRoomsNumber: this.fb.control(this.roomsChoice, Validators.required),
      assetParkingLots:this.fb.control(this.parkingChoice, Validators.required),
      assetBalconiesNum:this.fb.control(this.balconiesNum, Validators.required),
    });
    // this.assetDetails.ge\t('assetParkingLots')!.setValue(this.parkingChoice);

  }

  updateBar(){
    const length=270*(this.assetDescriptionLetters.length/150);
    this.barWidth = length<=270? length+'px' : 270+'px'
    if(this.assetDescriptionLetters.length>131){
      this.colors = ["#79d1c3","#f8fcfb"]
      this.color="#79d1c3"
      this.textBar = "בול!"
    }else if(this.assetDescriptionLetters.length>101){
      this.colors = ["#c9fdd7","#f8fcfb"]
      this.color="#c9fdd7"
      this.textBar = "אוטוטו"
    }else if(this.assetDescriptionLetters.length>61){
      this.colors = ["#f8f398","#f8fcfb"]
      this.color="#f8f398"
      this.textBar = "עוד ממש קצת וזה שם"
    }else if(this.assetDescriptionLetters.length>31){
      this.colors = ["#ff894c","#f8fcfb"]
      this.color="#ff894c"
      this.textBar = "יופי.המודעה הולכת לכיוון נכון"
    }else if(this.assetDescriptionLetters.length>=1) {
        this.colors = ["#f70776","#f8fcfb"];
        this.color="#f70776"
        this.textBar = "מרגיש לנו שהטקסט שכתבת קצר מידי"
     } else{
        this.colors = ["#f70776","#f8fcfb"];
        this.color="#f70776"
        this.textBar = "ממליצים לך בחום להוסיף תיאור"
     }
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
