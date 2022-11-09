import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Appartement } from 'src/app/models/appartement.model';


@Component({
  selector: 'app-filter-appartment-kind',
  templateUrl: './filter-appartment-kind.component.html',
  styleUrls: ['./filter-appartment-kind.component.scss']
})
export class FilterAppartmentKindComponent implements OnInit {

  @Output() transferNumberChecked = new EventEmitter<number>()
  @Output() transferAppartTypes = new EventEmitter<boolean[]>()
  @Output() transferHouseTypes = new EventEmitter<boolean[]>()
  @Output() transferOtherTypes = new EventEmitter<boolean[]>()

  // this.passNumberOfChanges.emit(this.numberOfChanges)

  appartementsShow=false;
  housesShow=false;
  otherShow=false;


  appartments:[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]
              = [false,false,false,false,false,false,false,false,false];
  houses:[boolean,boolean,boolean,boolean] = [false,false,false,false];
  other:[boolean,boolean,boolean,boolean,boolean,boolean,boolean]
                = [false,false,false,false,false,false,false];


  // appType=[
  //           [false,false,false,false,false,false,false,false,false],
  //           [false,false,false,false],
  //           [false,false,false,false,false,false,false];
  //         ]

  allAppartmentsChecked:boolean=false;
  partOfAppartements:boolean=false;
  numberAppartmentsChecked:number = 0;
  counterAppartements=0;

  allHousesChecked:boolean=false;
  partOfHouses:boolean=false;
  numberOfHousesChecked=0;
  counterHouses=0;

  allOtherChecked:boolean=false;
  partOfOtherChecked = false;
  numberOfOtherChecked=0;
  counterOther=0;

  allChecked:boolean = false;
  noneChecked=true;
  partChecked=false;
  counterChecked:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickAll(){
    this.allChecked = !this.allChecked;
    this.allAppartmentsChecked = this.allChecked;
    this.allHousesChecked = this.allChecked;
    this.allOtherChecked = this.allChecked
     for(let i = 0;i<this.appartments.length; i++ ){
      this.appartments[i] = this.allChecked;
     }
    // this.appartments.forEach(el => {el = this.allChecked;
    //                                 }); doesnt work with for each
    for(let i = 0;i<this.houses.length; i++ ){
      this.houses[i] = this.allChecked;
     }
     for(let i = 0;i<this.other.length; i++ ){
      this.other[i] = this.allChecked;
     }
     this.statusCategoriesCheck()
  }


  statusCategoriesCheck(){
    if(this.allAppartmentsChecked && this.allHousesChecked && this.allOtherChecked){
      this.allChecked=true;
      this.noneChecked=false;
      this.partChecked=false;
    }else if(!this.partOfAppartements && !this.partOfHouses && !this.partOfOtherChecked){
      this.allChecked=false;
      this.noneChecked=true;
      this.partChecked=false;
    }
    else{
      this.allChecked=false;
      this.noneChecked=false;
      this.partChecked=true;
    }
  }

  onClickApp(){
    this.allAppartmentsChecked = !this.allAppartmentsChecked;
    for(let i = 0;i<this.appartments.length; i++ ){
      this.appartments[i] = this.allAppartmentsChecked;
      this.partOfAppartements=false;
     }
     this.statusCategoriesCheck();
     this.countAllChecked()
  }

  // checkIndic(array:boolean[], itemNumbers:number, allItemsChecked:boolean, partOfItemsChecked:boolean){
  //   for(let i = 0; i<array.length; i++){
  //     if(array[i]){
  //       itemNumbers++;
  //     }
  //     console.log(itemNumbers);
  //     console.log('this' + this.numberAppartmentsChecked);

  //   if(itemNumbers===9){
  //         allItemsChecked = true;
  //         partOfItemsChecked=false;
  //     } else if(itemNumbers ===0){
  //         allItemsChecked = false;
  //         partOfItemsChecked=false;
  //     }else{
  //         partOfItemsChecked=true;
  //         allItemsChecked=false;
  //     }
  //   }
  //   itemNumbers = 0;
  // }

  onClickAppEl(num:number){
    this.appartments[num] = !this.appartments[num];
    // this.checkIndic(this.appartments,this.numberAppartmentsChecked,this.allAppartmentsChecked,
    //         this.partOfAppartements);
    for(let i = 0; i<this.appartments.length; i++){
      if(this.appartments[i]){
        this.numberAppartmentsChecked++;
      }
    if(this.numberAppartmentsChecked===this.appartments.length){
          this.allAppartmentsChecked = true;
          this.partOfAppartements=false;
      } else if(this.numberAppartmentsChecked ===0){
          this.allAppartmentsChecked = false;
          this.partOfAppartements=false;
      }else{
          this.partOfAppartements=true;
          this.allAppartmentsChecked=false;
      }
    }
    this.numberAppartmentsChecked = 0;
    this.statusCategoriesCheck();
    this.countAllChecked()
  }

  countAppartements(){
    this.counterAppartements=0;
    for(let i =0; i<this.appartments.length;i++){
      if(this.appartments[i]){
        this.counterAppartements++
      }
    }
  }
  countHouses(){
    this.counterHouses=0;
    for(let i =0; i<this.houses.length;i++){
      if(this.houses[i]){
        this.counterHouses++
      }
    }
  }
  countOther(){
    this.counterOther=0;
    for(let i =0; i<this.other.length;i++){
      if(this.other[i]){
        this.counterOther++
      }
    }
  }
  countAllChecked(){
    this.countAppartements();
    this.countHouses();
    this.countOther();
    this.counterChecked=this.counterAppartements+this.counterHouses+this.counterOther;
    this.transferNumberChecked.emit(this.counterChecked)
    console.log('num check' + this.counterChecked);

  }

  onClickHouseEl(num:number){
    this.houses[num] = !this.houses[num];
    for(let i = 0; i<this.houses.length; i++){
      if(this.houses[i]){
        this.numberOfHousesChecked++;
      }
    if(this.numberOfHousesChecked===this.houses.length){
          this.allHousesChecked = true;
          this.partOfHouses=false;
      } else if(this.numberOfHousesChecked ===0){
          this.allHousesChecked = false;
          this.partOfHouses=false;
      }else{
          this.partOfHouses=true;
          this.allHousesChecked=false;
      }
    }
    this.numberOfHousesChecked = 0;
    this.statusCategoriesCheck();
    this.countAllChecked()
  }

  onClickOtherEl(num:number){
    this.other[num] = !this.other[num];
    for(let i = 0; i<this.other.length; i++){
      if(this.other[i]){
        this.numberOfOtherChecked++;
      }
    if(this.numberOfOtherChecked===this.other.length){
          this.allOtherChecked = true;
          this.partOfOtherChecked=false;
      } else if(this.numberOfOtherChecked ===0){
          this.allOtherChecked = false;
          this.partOfOtherChecked=false;
      }else{
          this.partOfOtherChecked=true;
          this.partOfOtherChecked=false;
      }
    }
    this.numberOfOtherChecked = 0;
    this.statusCategoriesCheck();
    this.countAllChecked()
  }
  onClickHouses(){
    this.allHousesChecked = !this.allHousesChecked;
    for(let i = 0;i<this.houses.length; i++ ){
      this.houses[i] = this.allHousesChecked;
      this.partOfHouses = false
     }
     this.statusCategoriesCheck();
     this.countAllChecked()
  }
  onClickOther(){
    this.allOtherChecked = !this.allOtherChecked;
    for(let i = 0;i<this.other.length; i++ ){
      this.other[i] = this.allOtherChecked;
      this.partOfOtherChecked=false;
     }
     this.statusCategoriesCheck();
     this.countAllChecked()
  }

  onClickAppartementsShow(){
    this.appartementsShow = !this.appartementsShow;
  }
  onClickHousesShow(){
    this.housesShow = !this.housesShow;
  }
  onClickOtherShow(){
    this.otherShow=!this.otherShow
  }

  onClickChoice(){
    this.transferAppartTypes.emit(this.appartments);
    this.transferHouseTypes.emit(this.houses);
    this.transferOtherTypes.emit(this.other);

  }
}
