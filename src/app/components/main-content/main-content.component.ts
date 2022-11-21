import { Component, OnInit, OnDestroy, } from '@angular/core';
import { filter, Subscription } from 'rxjs';
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
  subscriptionToSearchFilter:Subscription = new Subscription;
  appartementListToShow:Appartement[]=[];
  appList:Appartement[]=[];
  sortBy:number=0;
  filterWithPrice=false;
  filterWithPictures=false;
  filterSearch:string='';


  constructor(private appartementsService:AppartementsService, private searchService:SearchService ) { }

  ngOnInit(): void {

    this.subscriptionAppList = this.appartementsService.getAppartements().
      subscribe({next:(appartements) =>{
        this.appartementListToShow = appartements;
      }});

      // this.subscriptionToSearchFilter = this.searchService.searchFilter$.
      // subscribe({next:(search) =>{
      //   this.filterSearch = search;
      //   this.appartementsService.getAppartements(this.filterSearch).
      //   subscribe({next:(appartements) =>{
      //     this.appartementListToShow = appartements;}})
      // }});


// regular appearance by id
    // this.subscriptionAppartementsList = this.appartementsService.getAppartementsList()
    // .subscribe({next:(appartements) => {
    //   this.appartementListToShow = appartements;
    // }})

    // commented out 14.11.22
    // this.subscriptionAppartementsList = this.appartementsService.getAppartementsList()
    //       .subscribe({next:(appartements) => {
    //         this.appartementListToShow = appartements.sort(function(a,b) {
    //           let keyA = new Date(a.postDate),
    //           keyB = new Date(b.postDate);
    //           if(keyA > keyB) return -1;
    //           if(keyA < keyB) return 1;
    //           return 0;
    //         })
    //       }});
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
  }

  showRoomsandID(){
    const filter = "roomsNumber=5&id=1"
    this.subscriptionAppList = this.appartementsService.getAppartements(filter).
    subscribe({next:(appartements) =>{
      this.appartementListToShow = appartements;
    }});
  }
// commented out 14.11.22
  // updateListBySort(){
  //   if(this.sortBy===2){
  //     // sort by price from high to low
  //     this.subscriptionAppartementsList = this.appartementsService.getAppartementsList()
  //     .subscribe({next:(appartements) => {
  //       this.appartementListToShow = appartements.sort((a,b) => {
  //         if(a.price === undefined){
  //           return 1;
  //         }
  //         if(b.price===undefined){
  //           return -1;
  //         }
  //         if(a.price===b.price){
  //           return 0;
  //         }
  //         return a.price < b.price ?1:-1;
  //       }
  //     )}});



  //   }else if(this.sortBy===1){
  //   // sort by price from low to high
  //       this.subscriptionAppartementsList = this.appartementsService.getAppartementsList()
  //       .subscribe({next:(appartements) => {
  //         this.appartementListToShow = appartements.sort((a,b) => {
  //           if(a.price === undefined){
  //             return 1;
  //           }
  //           if(b.price===undefined){
  //             return -1;
  //           }
  //           if(a.price===b.price){
  //             return 0;
  //           }
  //           return a.price<b.price?-1:1;
  //         }
  //       )}});
  //       //   this.appartementListToShow = appartements.sort((a,b) => a.price - b.price);
  //       // }});

  //   } else{
  //   // sort by Date
  //         this.subscriptionAppartementsList = this.appartementsService.getAppartementsList()
  //         .subscribe({next:(appartements) => {
  //           this.appartementListToShow = appartements.sort(function(a,b) {
  //             let keyA = new Date(a.postDate),
  //             keyB = new Date(b.postDate);
  //             if(keyA > keyB) return -1;
  //             if(keyA < keyB) return 1;
  //             return 0;
  //           })
  //         }});
  //       }
  // }

  ngOnDestroy(){
    this.subscriptionAppartementsList.unsubscribe();
    this.subscriptionToSearchFilter.unsubscribe();
  }
}
