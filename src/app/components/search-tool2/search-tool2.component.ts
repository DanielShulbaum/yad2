import {  Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { AppartementsService } from 'src/app/services/appartements.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-tool2',
  templateUrl: './search-tool2.component.html',
  styleUrls: ['./search-tool2.component.scss']
})
export class SearchTool2Component implements OnInit {

  basicSearch!:FormGroup ;
  advancedSearch!:FormGroup;

  numberOfAssetsChecked:number=0;
  chosenAppTypes:boolean[]=[];
  chosenHousesTypes:boolean[]=[];
  chosenOtherTypes:boolean[]=[];
  chosenMinRooms:number=0;
  chosenMaxRooms:number=12;
  chosenMinFloor:number=0;
  chosenMaxFloor:number=17;

   //variables of showing menus
   propertiesShow:boolean = false;
   roomsFilterShow:boolean = false;
   advancedSearchShow:boolean = false;
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
  constructor(private fb:FormBuilder, private searchService:SearchService, private appartementsService:AppartementsService ) { }

  ngOnInit(): void {

    // this.basicSearch=this.fb.group({
    //   baseSearch:this.fb.group({
    //     location:this.fb.control(''),
    //     min_price:this.fb.control(''),
    //     max_price:this.fb.control(''),
    //     }),
    //   advancedSearch:this.fb.group({
    //     loca:this.fb.control(''),
    //   })
    //   })
    this.basicSearch=this.fb.group({
        location:this.fb.control(''),
        min_price:this.fb.control(''),
        max_price:this.fb.control(''),
        chosenMinRooms:this.fb.control(''),
        chosenMaxRooms:this.fb.control(''),
    })
      this.advancedSearch=this.fb.group({
        parking:this.fb.control(''),
        elevator:this.fb.control(''),
        airConditioner:this.fb.control(''),
        balcony:this.fb.control(''),
        shelter:this.fb.control(''),
        grating:this.fb.control(''),
        storage:this.fb.control(''),
        handicapped:this.fb.control(''),
        renovated:this.fb.control(''),
        furnitured:this.fb.control(''),
        exclusive:this.fb.control(''),
        minFloor:this.fb.control(''),
        maxFloor:this.fb.control(''),
        minArea:this.fb.control(''),
        maxArea:this.fb.control(''),
        entrDate:this.fb.control(''),
        flexEntr:this.fb.control(''),
        freeText:this.fb.control(''),
      });
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
  passMinFloor(event:any){
    this.chosenMinFloor = event;
    this.startingFloorListShow=false;
    console.log('minfloor' + this.chosenMinFloor);

  }
  passMaxFloor(event:any){
    this.chosenMaxFloor = event;
    this.finalFloorListShow=false;
    console.log('maxfloor' + this.chosenMaxFloor);
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

  submitBasicSearch(){
   this.searchService.getBasicSearch(true,this.chosenAppTypes,this.chosenHousesTypes,this.chosenOtherTypes,
      this.basicSearch.value.location, this.chosenMinRooms, this.chosenMaxRooms,
        this.basicSearch.value.min_price,this.basicSearch.value.max_price)

  // this.appartementsService.getAppartementsByFilter(this.chosenAppTypes,this.chosenHousesTypes,this.chosenOtherTypes,
  //       this.basicSearch.value.location, this.chosenMinRooms, this.chosenMaxRooms,
  //         this.basicSearch.value.minPrice,this.basicSearch.value.maxPrice)


  }

  submitAdvancedSearch(){
    this.searchService.getBasicSearch(false,this.chosenAppTypes,this.chosenHousesTypes,this.chosenOtherTypes,
      this.basicSearch.value.location, this.chosenMinRooms, this.chosenMaxRooms,
        this.basicSearch.value.min_price,this.basicSearch.value.max_price);


  this.searchService.getAdvancedSearch(this.advancedSearch.value.parking,this.advancedSearch.value.elevator,this.advancedSearch.value.airConditioner,
    this.advancedSearch.value.shelter,this.advancedSearch.value.grating,this.advancedSearch.value.storage,this.advancedSearch.value.handicapped,
    this.advancedSearch.value.renovated,this.advancedSearch.value.furnitured,this.advancedSearch.value.minFloor,
    this.advancedSearch.value.maxFloor,this.advancedSearch.value.minArea,this.advancedSearch.value.maxArea,this.advancedSearch.value.entrDate,this.advancedSearch.value.flexEntr,
    this.advancedSearch.value.freeText)

      }
  onClickClear(){
    this.advancedSearch.reset()
  }
}
