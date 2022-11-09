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

  subscriptionAppartementsList!: Subscription;
  appartementListToShow:Appartement[]=[];
  constructor(private appartementsService:AppartementsService) { }

  ngOnInit(): void {
    // this.subscriptionAppartementsList = this.appartementsService.getAppartementsList()
    //   .subscribe(appartements => {
    //     this.appartementListToShow = appartements;
    //   });

    this.subscriptionAppartementsList = this.appartementsService.getAppartementsList()
    .subscribe({next:(appartements) => {
      this.appartementListToShow = appartements;
    }})
  }

  ngOnDestroy(){
    this.subscriptionAppartementsList.unsubscribe();
  }
}
