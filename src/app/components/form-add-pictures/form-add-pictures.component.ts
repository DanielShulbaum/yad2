import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { NewPostService } from 'src/app/services/new-post.service';

@Component({
  selector: 'app-form-add-pictures',
  templateUrl: './form-add-pictures.component.html',
  styleUrls: ['./form-add-pictures.component.scss']
})
export class FormAddPicturesComponent implements OnInit {
  @Output() transferClose5Stage = new EventEmitter<boolean>()
  @Output() transferComplete5Stage = new EventEmitter<boolean>()
  assetPictures!:FormGroup;

  changeToTextInp1:boolean=false;
  changeToTextInp2:boolean=false;
  changeToTextInp3:boolean=false;
  changeToTextInp4:boolean=false;
  changeToTextInp5:boolean=false;
  changeToTextInp6:boolean=false;
  changeToTextInp7:boolean=false;
  changeToTextInp8:boolean=false;
  changeToTextInp9:boolean=false;
  changeToTextInp10:boolean=false;
  changeToTextInp11:boolean=false;
  linkAdress:string='';
  linksArray:string[] = [];
  constructor(private fb: FormBuilder, private newPostService:NewPostService) { }

  ngOnInit(): void {
    this.assetPictures = this.fb.group({
    });
  }

  onSubmitPictures(){
    this.transferComplete5Stage.emit(true);
    this.newPostService.picturesLinksArray = JSON.parse(JSON.stringify(this.linksArray))

  }
  onClickUpload(num:number){
    switch(num){
      case 1: this.changeToTextInp1 = true;break;
      case 2: this.changeToTextInp2 = true;break;
      case 3: this.changeToTextInp3 = true;break;
      case 4: this.changeToTextInp4 = true;break;
      case 5: this.changeToTextInp5 = true;break;
      case 6: this.changeToTextInp6 = true;break;
      case 7: this.changeToTextInp7 = true;break;
      case 8: this.changeToTextInp8 = true;break;
      case 9: this.changeToTextInp9 = true;break;
      case 10: this.changeToTextInp10 = true;break;
      case 11: this.changeToTextInp11 = true;break;
      default:break;
      }
  }
  onEnter(num:number){
   this.linksArray.push(this.linkAdress);
   this.linkAdress='';

   switch(num){
    case 1: this.changeToTextInp1 = false;break;
    case 2: this.changeToTextInp2 = false;break;
    case 3: this.changeToTextInp3 = false;break;
    case 4: this.changeToTextInp4 = false;break;
    case 5: this.changeToTextInp5 = false;break;
    case 6: this.changeToTextInp6 = false;break;
    case 7: this.changeToTextInp7 = false;break;
    case 8: this.changeToTextInp8 = false;break;
    case 9: this.changeToTextInp9 = false;break;
    case 10: this.changeToTextInp10 = false;break;
    case 11: this.changeToTextInp11 = false;break;
    default:break;
    }
  }
  onClickReturn(){
    this.transferClose5Stage.emit(false);
  }
}
