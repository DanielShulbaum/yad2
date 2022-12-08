import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
location?:string;
minRooms:number = 0;
maxRooms:number = 12;
minPrice?:number;
maxPrice?:number;
minFloor:number = 0;
maxFloor:number=17;
minArea:number = 0;
maxArea:number = 150;
searchString:string ="";
chosenAppTypes = ['דירה','דירת גן','גג\פנטהאוז','דופלקס','דירת נופש','מרתף\פרטר','טריפלקס','יחידת דיור','סטודיו\לופט',]
chosenHousesTypes=["'בית פרטי/קוטג",'דו משפחתי','משק חקלאי/נחלה',"משק עזר",]
chosenOtherTypes=['מגרשים','דיור מוגן','בניין מגורים','מחסן','חניה',"קב' רכישת/ זכות לנכס",'כללי',]

  constructor() { }

  searchFilter$=new Subject<string>();



  getBasicSearch(basicSearch:boolean,chosenAppTypes:boolean[],chosenHousesTypes:boolean[],chosenOtherTypes:boolean[],
                 location?:string, minRooms?:number, maxRooms?:number, minPrice?:number, maxPrice?:number,){

    this.searchString ="";
    if(location!==''){
      this.location = location;
      this.searchString=this.searchString+"cityName_like="+location

    }
    if(minRooms!==undefined){
      this.minRooms = minRooms;
    }
    if(maxRooms!==undefined){
      this.maxRooms = maxRooms;
    }

    if(minPrice!=0){
      this.minPrice = minPrice;
    }
    if(maxPrice!=0){
      this.maxPrice = maxPrice;
    }

    this.setRoomsSearch();
    this.setPriceSearch();
    for(let index = 0; index<chosenAppTypes.length; index++){
      if(chosenAppTypes[index] === true){
        this.searchString = this.searchString+'appartementKind='+ this.chosenAppTypes[index]+'&';
      }
    }
    for(let index = 0; index<chosenHousesTypes.length; index++){
      if(chosenHousesTypes[index] === true){
        this.searchString = this.searchString+'appartementKind='+ this.chosenHousesTypes[index]+'&';
      }
    }
    for(let index = 0; index<chosenOtherTypes.length; index++){
      if(chosenOtherTypes[index] === true){
        this.searchString = this.searchString+'appartementKind='+ this.chosenOtherTypes[index]+'&';
      }
    }
    if(basicSearch){
      this.passSearchString();
    }
  }
  getAdvancedSearch(parking:boolean,elevator:boolean,airConditioner:boolean,
    shelter:boolean, grating:boolean, storage:boolean, handicapped:boolean, renovated:boolean,
    furnitured:boolean,minFloor:number,maxFloor:number,minArea:number,
    maxArea:number){

      if(parking){
        this.searchString=this.searchString+"parkingLots=2&";
      }
      if(elevator){
        this.searchString=this.searchString+"lift=true&";
      }
      if(airConditioner){
        this.searchString=this.searchString+"airConditioner=true&";
      }
      if(shelter){
        this.searchString=this.searchString+"hasShelter=true&";
      }
      if(grating){
        this.searchString=this.searchString+"gratings=true&";
      }
      if(storage){
        this.searchString=this.searchString+"hasStoragePlace=true&";
      }
      if(handicapped){
        this.searchString=this.searchString+"handicappedAccess=true&";
      }
      if(renovated){
        this.searchString=this.searchString+"isRenovated=true&";
      }
      if(furnitured){
        this.searchString=this.searchString+"hasFurniture=true&";
      }
      if(handicapped){
        this.searchString=this.searchString+"handicappedAccess=true&";
      }
      if(handicapped){
        this.searchString=this.searchString+"handicappedAccess=true&";
      }
      if(handicapped){
        this.searchString=this.searchString+"handicappedAccess=true&";
      }
      if(minFloor!=0){
        this.minFloor = minFloor;
      }
      if(maxFloor!=0){
        this.maxFloor = maxFloor;
      }
      if(minArea!=0){
        this.minArea = minArea;
      }
      if(maxArea!=0){
        this.maxArea = maxArea;
      }


      this.setFloor();
      this.setArea();

      this.passSearchString()

  }

  passSearchString(){
    if(this.searchString !== undefined){
      this.searchFilter$.next(this.searchString);

  }
  }

setFloor(){
  for(let index=this.minFloor;index<=this.maxFloor;index++){
    this.searchString = this.searchString+"floorNumber="+index+'&';
  }
}
setArea(){
  for(let index=this.minArea;index<=this.maxArea;index=index+10){
    this.searchString = this.searchString+"area="+index+'&';
  }
}

setRoomsSearch(){
  for(let index = this.minRooms; index<=this.maxRooms;index = index+0.5){
    this.searchString = this.searchString+'roomsNumber='+index+'&';
  }
}
setPriceSearch(){
  if(this.minPrice !==undefined){
    for(let index = this.minPrice; index<500000000;index = index+1000000){
      this.searchString = this.searchString+'price='+index+'&';
    }
  }else if(this.maxPrice!==undefined){
    for(let index = 0; index <=this.maxPrice;index = index+1000000){
      this.searchString = this.searchString+'price='+index+'&';
    }
  }
}



}
