import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPostService } from 'src/app/services/new-post.service';

@Component({
  selector: 'app-form-contact-details',
  templateUrl: './form-contact-details.component.html',
  styleUrls: ['./form-contact-details.component.scss']
})
export class FormContactDetailsComponent implements OnInit {
  @Output() transferComplete6Stage = new EventEmitter<boolean>()
  assetContactDetails!:FormGroup;
  showAddContactSection:boolean=false;


  constructor(private fb: FormBuilder, private newPostService:NewPostService) { }

  ngOnInit(): void {
    this.assetContactDetails = this.fb.group({
      contactName:this.fb.control('', Validators.required),
      contactPhone:this.fb.control('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      contactAdditionalPhone:this.fb.control('', Validators.pattern("^[0-9]*$")),
      contactEmail:this.fb.control('', Validators.email),
      termsAccept:this.fb.control('', Validators.required),
      postNumeration:this.fb.control(''),
      contactAdditionalName:this.fb.control(''),
    });

  }

  onSubmitContactDetailsForm(){
    this.newPostService.onGetContactDetails(this.assetContactDetails);
    this.transferComplete6Stage.emit(true);
  }
  onClickAddContact(){
    this.showAddContactSection = !this.showAddContactSection;
  }
}
