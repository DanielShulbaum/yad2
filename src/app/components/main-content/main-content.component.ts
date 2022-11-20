import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs';
import { Appartement } from 'src/app/models/appartement.model';
import { AppartementsService } from 'src/app/services/appartements.service';



@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {

  subscriptionAppartementsList: Subscription=new Subscription;
  appartementListToShow:Appartement[]=[];
  sortBy:number=0;
  filterWithPrice=false;
  filterWithPictures=false;
  constructor(private appartementsService:AppartementsService) { }

  ngOnInit(): void {
    this.subscriptionAppartementsList = this.appartementsService.getAppartementsList()
      .subscribe(appartements => {
        this.appartementListToShow = appartements;
      });

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
  }
}
