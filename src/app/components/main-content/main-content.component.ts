import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs';
import { Appartement } from 'src/app/models/appartement.model';
import { AppartementsService } from 'src/app/services/appartements.service';
import { SearchService } from 'src/app/services/search.service';
// import { HttpClient} from '@angular/common/http'



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
  appartementListToShow:Appartement[]=[];
  appList:Appartement[]=[];
  sortBy:number=0;
  filterWithPrice=false;
  filterWithPictures=false;
  searchFilter:string=''

  constructor(private appartementsService:AppartementsService, private searchService:SearchService ) { }

  ngOnInit(): void {

    // this.subscriptionAppList = this.appartementsService.getAppartements().
    //   subscribe(appartements =>{
    //     this.appartementListToShow = appartements;
    //   });


// regular appearance by id
    this.subscriptionAppartementsList = this.appartementsService.getAppartements()
    .subscribe({next:(appartements) => {
      this.appartementListToShow = appartements;
      console.log('appartements saved');

    }})

    this.subscriptionToFilter=this.searchService.searchFilter$.
      subscribe({next:(search)=>{
        this.searchFilter = search;
                    this.subscriptionAppartementsList = this.appartementsService.getAppartements(this.searchFilter)
                      .subscribe({next:(appartements) => {
                  this.appartementListToShow = appartements;
                }})
      }})



  }

  passSortChoice(event:number){
    this.sortBy=event;
    // commented out 14.11.22
    // this.updateListBySort();
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

  showRoomsandID(){

    const filter = "roomsNumber=5&id=1"
    this.subscriptionAppList = this.appartementsService.getAppartements(filter).
      subscribe({next:(appartements) =>{
        this.appartementListToShow = appartements;
    }});
  }


  ngOnDestroy(){
    this.subscriptionAppartementsList.unsubscribe();
  }
}
