import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NewPostService } from 'src/app/services/new-post.service';

@Component({
  selector: 'app-form-contact-details',
  templateUrl: './form-contact-details.component.html',
  styleUrls: ['./form-contact-details.component.scss']
})
export class FormContactDetailsComponent implements OnInit {
  @Output() transferComplete6Stage = new EventEmitter<boolean>()
  assetContactDetails!:UntypedFormGroup;
  showAddContactSection:boolean=false;
  @Input() userName!:string;
  @Input() phoneNumber!:number


  constructor(private fb: UntypedFormBuilder, private newPostService:NewPostService) { }

  ngOnInit(): void {
    const phoneNum ='0'+ this.phoneNumber.toString().slice(0,2)+'-'+this.phoneNumber.toString().slice(2);
    this.assetContactDetails = this.fb.group({
      contactName:this.fb.control(this.userName, Validators.required),
      contactPhone:this.fb.control(phoneNum,Validators.required),
      contactAdditionalPhone:this.fb.control('', Validators.minLength(10)),
      contactEmail:this.fb.control('', Validators.email),
      termsAccept:this.fb.control('', Validators.required),
      postNumeration:this.fb.control(''),
      contactAdditionalName:this.fb.control(''),
    });

  }

  onSubmitContactDetailsForm(){
    if(!this.assetContactDetails.valid){
         return;
    }

    this.newPostService.onGetContactDetails(this.assetContactDetails);
    this.transferComplete6Stage.emit(true);
  }
  onClickAddContact(){
    this.showAddContactSection = !this.showAddContactSection;
  }
}
