import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs';
import { Appartement } from 'src/app/models/appartement.model';
import { AppartementsService } from 'src/app/services/appartements.service';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {

  subscriptionAppartementsList: Subscription=new Subscription;
  subscriptionAppList:Subscription = new Subscription;
  subscriptionToFilter:Subscription = new Subscription;
  subscriptionToPost:Subscription = new Subscription;
  page:number = 1;
  appartementListToShow:Appartement[]=[];
  appList:Appartement[]=[];
  sortBy:number=0;
  filterWithPrice=false;
  filterWithPictures=false;
  searchFilter:string|undefined

  constructor(private appartementsService:AppartementsService, private searchService:SearchService ) { }

  ngOnInit(): void {
    this.subscriptionAppartementsList = this.appartementsService.getAppartements(this.page)
    .subscribe({next:(appartements:Appartement[]) => {
      this.appartementListToShow = appartements;
    }})
    // to show infinity scroll work
    console.log(this.appartementListToShow);
      this.subscriptionToFilter=this.searchService.searchFilter$.
      subscribe({next:(search)=>{
        this.searchFilter = search;
        //
        this.page = 1;
                    this.subscriptionAppartementsList = this.appartementsService.getAppartements(this.page,this.searchFilter)
                      .subscribe({next:(appartements:Appartement[]) => {
                  this.appartementListToShow = appartements;
                }})
      }})
  }
  onScroll():void{
    this.appartementsService.getAppartements(this.page++,this.searchFilter).
    subscribe({next:(appartements:Appartement[])=>{
      this.appartementListToShow.push(...appartements);
      // to show infinity scroll work
      console.log(this.appartementListToShow);
    }})
  }
  passSortChoice(event:number){
    this.sortBy=event;
  }

  passFilterPrice(event:boolean){
    this.filterWithPrice = event;
    this.appartementListToShow = this.appartementListToShow.filter( appartement=>{
      return appartement.price !== undefined;
    })
  }
  passFilterPictures(event:boolean){
    this.filterWithPictures=event;
    this.appartementListToShow = this.appartementListToShow.filter( appartement=>{
      return appartement.imgPath.length>0;
    })
  }



  ngOnDestroy(){
    this.subscriptionAppartementsList.unsubscribe();
  }
}
