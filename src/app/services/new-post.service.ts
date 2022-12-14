import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { Appartement} from '../models/appartement.model';
import { User } from '../models/user.model';
import { AppartementsService } from './appartements.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {
  subscriptionToCurrentUser:Subscription = new Subscription
  currentUser!:User;

  assetType:string='';
  assetCondition:string='';
  assetCity:string='';
  assetStreet:string='';
  assetHouse:number=0;
  assetFloorNum:number=0;
  assetNumOfFloorsBuilding:number=0;
  assetOnColumns?:boolean;
  assetNeighbourhood:string = '';
  assetSaleArea?:string;

  assetRoomsNumber:number=0;
  assetParkingLots:number=0;
  assetBalconiesNum:number=0;

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

  assetDescription:string="";

  assetBuiltArea?:number;
  assetTotalArea:number=0;
  assetPrice?:number;
  assetEntrDate:Date = new Date;
  isAssetEntrImmediate:boolean = false;
  isAssetEntrFlex:boolean = false;

  picturesLinksArray:string[]=[];

  contactName:string='';
  contactPhone:number=0;
  contactAdditionalPhone?:number;
  contactAdditionalName?:string;
  contactEmail:string='';
  postNumeration:boolean=false;


  constructor(private appartementService:AppartementsService, private authService:AuthService,
              private router:Router) {
    this.subscriptionToCurrentUser = this.authService.currentUser.
        subscribe(user => {
          if(user !== (undefined || null)){
            this.currentUser = user;
          }
        })
  }


  onGetAdressAsset(form: FormGroup){
    this.assetType = form.value.assetType;      //entered
    this.assetCondition = form.value.assetCondition;
    this.assetCity = form.value.assetCity;      //entered
    this.assetStreet = form.value.assetStreet; //entered
    this.assetHouse = form.value.assetHouse;    //entered
    this.assetFloorNum = form.value.assetFloorNum; //entered
    this.assetNumOfFloorsBuilding = form.value.assetNumOfFloorsBuilding; //entered
    this.assetOnColumns = form.value.assetOnColumns;
    this.assetNeighbourhood = form.value.assetNeighbourhood;  //entered
    this.assetSaleArea = form.value.assetSaleArea;
  }
  onGetAssetDetails(form: FormGroup,
    hasAirCondition:boolean,hasShelter:boolean,hasStorage:boolean, hasFurniture:boolean, hasIncapableAccess:boolean, hasLift:boolean,
    hasTadiran:boolean,isRenovated:boolean,hasKosherKitchen:boolean,hasSunBoiler:boolean,hasGrating:boolean,
    assetDescription:string){
    this.assetRoomsNumber = form.value.assetRoomsNumber; //entered
    this.assetParkingLots = form.value.assetParkingLots; //entered
    this.assetBalconiesNum = form.value.assetBalconiesNum; //entered
    this.hasAirCondition = hasAirCondition;//entered
    this.hasShelter =hasShelter; //entered
    this.hasStorage=hasStorage;//entered
    this.hasFurniture=hasFurniture;//entered
    this.hasIncapableAccess=hasIncapableAccess;//entered
    this.hasLift=hasLift;//entered
    this.hasTadiran=hasTadiran;//entered
    this.isRenovated=isRenovated;//entered
    this.hasKosherKitchen=hasKosherKitchen;//entered
    this.hasSunBoiler=hasSunBoiler;//entered
    this.hasGrating=hasGrating;//entered
    this.assetDescription = assetDescription; //entered

  }
  onGetPaymentsAsset(form: FormGroup){
    this.assetBuiltArea = form.value.builtArea;
    this.assetTotalArea = form.value.totalArea; //entered
    this.assetPrice = form.value.assetPrice;//entered
    this.assetEntrDate = form.value.assetEntrDate; //entered
    this.isAssetEntrImmediate = form.value.assetEntrDateImmediately;
    this.isAssetEntrFlex = form.value.assetEntrDateFlex;//entered
  }
  onGetContactDetails(form: FormGroup){
    this.contactName=form.value.contactName;
    this.contactPhone=form.value.contactPhone;
    this.contactAdditionalPhone=form.value.contactAdditionalPhone;
    this.contactAdditionalName=form.value.contactAdditionalName;
    this.contactEmail=form.value.contactEmail;
    this.postNumeration=form.value.postNumeration;;
  }
  OnAddNewPost(){

    let post = new Appartement(this.appartementService.counter++,new Date(),this.assetStreet,
    this.assetHouse, this.assetType,this.assetNeighbourhood,this.assetCity,this.assetRoomsNumber,
    this.assetFloorNum,this.assetTotalArea, this.assetDescription, this.assetNumOfFloorsBuilding,
    this.assetEntrDate, this.assetParkingLots, this.assetBalconiesNum, this.currentUser,
    this.hasAirCondition, this.hasGrating, this.hasLift, this.hasKosherKitchen, this.hasSunBoiler,
    this.hasIncapableAccess, this.isRenovated, this.hasShelter, this.hasStorage, this.hasTadiran,
    this.hasFurniture, this.isAssetEntrFlex,false,this.picturesLinksArray,this.assetPrice);

    //line below adds appartement to service
    this.appartementService.appartementList.push(post);

    // optional
    const postJson = JSON.stringify(post);

    this.appartementService.postAppartements(post);
    console.log(postJson);

    this.appartementService.counter++;
    this.router.navigate(['/home']);
  }
}
