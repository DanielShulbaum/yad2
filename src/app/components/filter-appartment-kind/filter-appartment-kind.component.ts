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
  allHousesChecked:boolean=false;
  allOtherChecked:boolean=false;
  allChecked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickAll(){
    this.allChecked = !this.allChecked;
    console.log(this.allChecked);

    this.allAppartmentsChecked = this.allChecked;
    console.log(this.allAppartmentsChecked);

    this.allHousesChecked = this.allChecked;
    console.log(this.allHousesChecked);

    this.allOtherChecked = this.allChecked
     console.table(this.appartments);
     for(let i = 0; )
    this.appartments.forEach(el => {el = this.allChecked;
                                    console.log(this);
                                    console.log(el);
                                    });
    console.table(this.appartments);

    this.houses.forEach(house => {house = this.allChecked});
    this.other.forEach(other => {other = this.allChecked});
  }
  onClickApp(){
    this.allAppartmentsChecked = !this.allAppartmentsChecked;
    this.appartments.forEach(el =>{
      el = this.allAppartmentsChecked;
    })
  }
  onClickAppEl(num:number){
    this.appartments[num] = !this.appartments[num];
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
    this.houses.forEach(el =>{
      el = this.allHousesChecked;
    })
  }
  onClickOther(){
    this.allOtherChecked = !this.allOtherChecked;
    this.other.forEach(el =>{
      el = this.allOtherChecked;
    })
  }

}
