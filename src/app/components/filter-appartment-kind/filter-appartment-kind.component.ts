import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-appartment-kind',
  templateUrl: './filter-appartment-kind.component.html',
  styleUrls: ['./filter-appartment-kind.component.scss']
})
export class FilterAppartmentKindComponent implements OnInit {
  appartments:[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]
              = [false,false,false,false,false,false,false,false,false];
  houses:[boolean,boolean,boolean,boolean] = [false,false,false,false];
  other:[boolean,boolean,boolean,boolean,boolean,boolean,boolean]
                = [false,false,false,false,false,false,false];

  allAppartmentsChecked:boolean=false;
  numberAppartmentsChecked:number = 0;
  allHousesChecked:boolean=false;
  allOtherChecked:boolean=false;
  allChecked:boolean = false;

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

  }
  onClickApp(){
    this.allAppartmentsChecked = !this.allAppartmentsChecked;
    for(let i = 0;i<this.appartments.length; i++ ){
      this.appartments[i] = this.allAppartmentsChecked;
     }
  }
  onClickAppEl(num:number){
    this.appartments[num] = !this.appartments[num];
    for(let i = 0; i<this.appartments.length; i++){
      if(this.appartments[i]){
        this.numberAppartmentsChecked++;
      }
      console.log(this.numberAppartmentsChecked);
    if(this.numberAppartmentsChecked===9){
      this.allAppartmentsChecked = true;
      } else if(this.numberAppartmentsChecked ===0){
        this.allAppartmentsChecked = false;
      }
      this.numberAppartmentsChecked = 0;
    }
    //check all array
    //check all checks
  }
  onClickHouseEl(num:number){
    this.houses[num] = !this.houses[num];
    //check all array
    //check all checks
  }
  onClickOtherEl(num:number){
    this.other[num] = !this.other[num];
    //check all array
    //check all checks
  }
  onClickHouses(){
    this.allHousesChecked = !this.allHousesChecked;
    for(let i = 0;i<this.houses.length; i++ ){
      this.houses[i] = this.allHousesChecked;
     }
  }
  onClickOther(){
    this.allOtherChecked = !this.allOtherChecked;
    for(let i = 0;i<this.other.length; i++ ){
      this.other[i] = this.allOtherChecked;
     }
  }

}
