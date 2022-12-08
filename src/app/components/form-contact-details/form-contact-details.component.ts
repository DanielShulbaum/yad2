import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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


  constructor(private fb: UntypedFormBuilder, private newPostService:NewPostService) { }

  ngOnInit(): void {
    this.assetContactDetails = this.fb.group({
      contactName:this.fb.control('', Validators.required),
      contactPhone:this.fb.control('',Validators.required),
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
