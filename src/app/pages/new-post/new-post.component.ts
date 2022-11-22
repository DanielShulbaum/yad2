import { Component, OnInit } from '@angular/core';
import { FormGroup,    Validators,  FormBuilder, } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { NewPostService } from 'src/app/services/new-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  subscriptionToCurrentUser:Subscription = new Subscription;
  currentUser:User|undefined=undefined;
  selectedAssetType=null;
  selectedCondition=null;
  assetTypes = ['דירה','דירת גן','בית פרטי/קוטג','גג פנטהאוז',
    'מגרשים','דופלקס','דירת נופש','דו משפחתי','מרתף/פרטר',
    'טריפלקס','יחידת דיור','משק חקלאי/נחלה','משק עזר',
    'דיור מוגן','בניין מגורים','סטודיו/לופט','מחסן',
    'חניה','קב` רכישה/זכות לנכס','כללי'
  ];
  assetCondition=['חדש מקבלן (לא גרו בו בכלל)',
  'חדש (נכס בן עד 5 שנים)',
  'משופץ (שופץ ב5 השנים האחרונות)',
  'במצב שמור (במצב טוב, לא שופץ)',
  'דרוש שיפוץ (זקוק לעבודת שיפוץ)',];
  assetAdressForm!:FormGroup;
  assetDetails!:FormGroup;

  showFirstStage:boolean=false;
  showSecondStage:boolean=false;
  completedSecondStage:boolean=false;
  showThirdStage:boolean=false
  completedThirdStage:boolean=false;
  showFourthStage:boolean=false;
  completedFourthStage:boolean=false;
  showFifthStage:boolean=false;
  completedFifthStage:boolean=false;
  showSixthStage:boolean=false;
  completedSixthStage:boolean=false;
  showSevenStage:boolean=false
  completedSevenStage:boolean=false;
  constructor(private fb: FormBuilder, private authService:AuthService, private newPostService:NewPostService) { }

  ngOnInit(): void {
    this.assetAdressForm = this.fb.group({
      assetType:this.fb.control('',Validators.required),
      assetCondition:this.fb.control('',Validators.required),
      assetCity:this.fb.control('',Validators.required),
      assetStreet:this.fb.control('',Validators.required),
      assetHouse:this.fb.control('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      assetFloorNum:this.fb.control('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      assetNumOfFloorsBuilding:this.fb.control('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      assetOnColumns:this.fb.control(''),
      assetNeighbourhood:this.fb.control(''),
      assetSaleArea:this.fb.control(''),
    })
    this.subscriptionToCurrentUser = this.authService.currentUser.
        subscribe(user => {
          if(user !== (undefined || null)){
            this.currentUser = user;
          }
        })
  }

  onSubmitAdressForm(){
  if(!this.assetAdressForm.valid){
      return;

    }
    this.newPostService.onGetAdressAsset(this.assetAdressForm);
    this.showSecondStage=!this.showSecondStage;
    this.completedSecondStage = !this.completedSecondStage;
    this.showThirdStage = !this.showThirdStage;
  }

  // onSubmitDetailsForm(){

  // }

  onClickForSale(){
    this.showFirstStage = !this.showFirstStage;
    this.showSecondStage=!this.showSecondStage;
  }
  onClickBackStage2(){
    this.showFirstStage = !this.showFirstStage;
    this.showSecondStage=!this.showSecondStage;
  }
  passShowThirdStage(event:boolean){
    this.showThirdStage = event;
  }
  passCompleteThirdStage(event:boolean){
    this.completedThirdStage = event;
    this.showThirdStage = false;
    this.showFourthStage=true
  }
  passShowFourthStage(event:boolean){
    this.showFourthStage = event;
    this.showThirdStage=true;
  }
  passCompleteFourthStage(event:boolean){
    this.completedFourthStage = event;
    this.showFourthStage = false;
    this.showFifthStage = true;
  }

  passShowFifthStage(event:boolean){
    this.showFifthStage=event;
    this.showFourthStage =true;
  }
  passCompleteFifthStage(event:boolean){
    this.completedFifthStage = event;
    this.showFifthStage = false;
    this.showSixthStage = true;
  }
  passCompleteSixthStage(event:boolean){
  this.completedSixthStage= event;
  this.showSixthStage = false;
  this.showSevenStage = true;
  }
}
