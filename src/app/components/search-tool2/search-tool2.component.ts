import {   Component,  OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControlName, UntypedFormGroup } from '@angular/forms';
import { AppartementsService } from 'src/app/services/appartements.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-tool2',
  templateUrl: './search-tool2.component.html',
  styleUrls: ['./search-tool2.component.scss']
})
export class SearchTool2Component implements OnInit
 {
  basicSearch!:UntypedFormGroup ;
  advancedSearch!:UntypedFormGroup;
  numberOfAssetsChecked:number=0;
  chosenAppTypes:boolean[]=[false,false,false,false,false,false,false,false,false];
  chosenHousesTypes:boolean[]=[false,false,false,false];
  chosenOtherTypes:boolean[]=[false,false,false,false,false,false,false];
  chosenMinRooms:number=0;
  chosenMaxRooms:number=13;
  chosenMinFloor:number|string="הכל";
  chosenMaxFloor:number=17;
   //variables of showing menus
   propertiesShow:boolean = false;
   roomsFilterShow:boolean = false;
   advancedSearchShow:boolean = false;
   startingFloorListShow = false;
   finalFloorListShow = false;

   //icons of checkboxs
   preferences:boolean[] = [false,false,false,false,false,false,false,false,false];
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
   numberPreferencesChosen:number = 0;
  constructor(private fb:UntypedFormBuilder, private searchService:SearchService, private appartementsService:AppartementsService ) { }

  ngOnInit(): void {


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
  }
  passMaxFloor(event:any){
    this.chosenMaxFloor = event;
    this.finalFloorListShow=false;
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

  //consider remove separate boolean indications after validation those were corrected in search service
  onClickPref(num:number){
    this.preferences[num]=!this.preferences[num];
    this.numberPreferencesChosen=0;

    this.preferences.forEach(el=>{
      if(el){
        this.numberPreferencesChosen++;
      }
    })

  }
  // onClickParking(){
  //   this.parking = !this.parking;
  //   this.preferences[0] = true;
  // }
  // onClickLift(){
  //   this.lift = !this.lift
  //   this.preferences[1] = true;
  // }
  // onClickAirCondition(){
  //   this.airCondition = !this.airCondition;
  //   this.preferences[2] = true;
  // }
  // onClickBalcony(){
  //   this.balcony = !this.balcony;
  //   this.preferences[3] = true;
  // }
  // onClickShelter(){
  //   this.shelter = !this.shelter;
  //   this.preferences[4] = true;
  // }
  // onClickGrating(){
  //   this.grating = !this.grating
  //   this.preferences[5] = true;
  // }
  // onClickStorage(){
  //   this.storage = !this.storage
  //   this.preferences[6] = true;
  // }
  // onClickHandicapped(){
  //   this.handicapped = !this.handicapped
  //   this.preferences[7] = true;
  // }
  // onClickRenovated(){
  //   this.renovated = !this.renovated
  //   this.preferences[8] = true;
  // }
  // onClickFurnitured(){
  //   this.furnitured = !this.furnitured
  //   this.preferences[9] = true;
  // }
  // onClickExclusive(){
  //   this.exclusive = !this.exclusive
  //   this.preferences[10] = true;
  // }

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


    this.searchService.getAdvancedSearch(this.preferences[0],this.preferences[1],this.preferences[2],
      this.preferences[3],this.preferences[4],this.preferences[5],this.preferences[6],
      this.preferences[7],this.preferences[8],this.advancedSearch.value.minFloor,
      this.advancedSearch.value.maxFloor,this.advancedSearch.value.minArea,this.advancedSearch.value.maxArea)

  // this.searchService.getAdvancedSearch(this.advancedSearch.value.parking,this.advancedSearch.value.elevator,this.advancedSearch.value.airConditioner,
  //   this.advancedSearch.value.shelter,this.advancedSearch.value.grating,this.advancedSearch.value.storage,this.advancedSearch.value.handicapped,
  //   this.advancedSearch.value.renovated,this.advancedSearch.value.furnitured,this.advancedSearch.value.minFloor,
  //   this.advancedSearch.value.maxFloor,this.advancedSearch.value.minArea,this.advancedSearch.value.maxArea)

      }
  onClickClear(){
    this.advancedSearch.reset()
  }
  onDateClick(){
    if(this.advancedSearch.get('flexEntr') !==null ){
      this.advancedSearch.get('flexEntr')!.reset();
    }
    // && this.advancedSearch.get('entrDate') !==null
  }
  onFlexEntrClick(){
    if(this.advancedSearch.get('entrDate') !==null ){
      this.advancedSearch.get('entrDate')!.reset();
    }
  }
}
