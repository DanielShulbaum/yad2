import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Appartement } from '../models/appartement.model';
import { AppartementsService } from './appartements.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
location?:string;
minRooms:number = 0;
maxRooms:number = 12;
minPrice?:number;
maxPrice?:number;
searchString?:string;
chosenAppTypes = ['דירה','דירת גן','גג\פנטהאוז','דופלקס','דירת נופש','מרתף\פרטר','טריפלקס','יחידת דיור','סטודיו\לופט',]
chosenHousesTypes=["'בית פרטי/קוטג",'דו משפחתי','משק חקלאי/נחלה',"משק עזר",]
chosenOtherTypes=['מגרשים','דיור מוגן','בניין מגורים','מחסן','חניה',"קב' רכישת/ זכות לנכס",'כללי',]

  constructor(private appartementService:AppartementsService) { }

  // searchFilter$=new Subject<string>();

  getBasicSearch(chosenAppTypes:boolean[],chosenHousesTypes:boolean[],chosenOtherTypes:boolean[],
                 location?:string, minRooms?:number, maxRooms?:number, minPrice?:number, maxPrice?:number,
                  ){
    if(location!==undefined){
      this.location = location;
      this.searchString=this.searchString+"streetName like="+location+'|'+"cityName like="+location+
      '|'+ 'neighbourhoodName like='+location;
    }
    if(minRooms!==undefined){
      this.minRooms = minRooms;
    }
    if(maxRooms!==undefined){
      this.maxRooms = maxRooms;
    }
    if(minPrice!==undefined){
      this.minPrice = minPrice;
    }
    if(maxPrice!==undefined){
      this.maxPrice = maxPrice;
    }
    this.setRoomsSearch();
    this.setPriceSearch();
    for(let index = 0; index<chosenAppTypes.length; index++){
      if(chosenAppTypes[index] === true){
        this.searchString = this.searchString+'appartementKind'+ this.chosenAppTypes[index];
      }
    }
    for(let index = 0; index<chosenHousesTypes.length; index++){
      if(chosenHousesTypes[index] === true){
        this.searchString = this.searchString+'appartementKind'+ this.chosenHousesTypes[index];
      }
    }
    for(let index = 0; index<chosenOtherTypes.length; index++){
      if(chosenOtherTypes[index] === true){
        this.searchString = this.searchString+'appartementKind'+ this.chosenOtherTypes[index];
      }
    }

    // if(this.searchString !== undefined){
    //     this.searchFilter$.next(this.searchString);
    // }
  }

setRoomsSearch(){
  for(let index = this.minRooms; index<=this.maxRooms;index = index+0.5){
    this.searchString = this.searchString+'roomsNumber='+index+'&';
  }
}
setPriceSearch(){
  if(this.minPrice!==undefined && this.maxPrice !==undefined){
    for(let index = this.minPrice; index<=this.maxPrice; index = index+10000){
      this.searchString = this.searchString+'price='+index+'&';
    }
  }else if(this.minPrice !==undefined){
    for(let index = this.minPrice; index<500000000;index = index+10000){
      this.searchString = this.searchString+'price='+index+'&';
    }
  }else if(this.maxPrice!==undefined){
    for(let index = 0; index <=this.maxPrice;index = index+10000){
      this.searchString = this.searchString+'price='+index+'&';
    }
  }
}



// "roomsNumber=5&id=1"

}
