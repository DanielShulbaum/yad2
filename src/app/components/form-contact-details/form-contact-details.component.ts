import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact-details',
  templateUrl: './form-contact-details.component.html',
  styleUrls: ['./form-contact-details.component.scss']
})
export class FormContactDetailsComponent implements OnInit {
  assetContactDetails!:FormGroup;
  showAddContactSection:boolean=false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.assetContactDetails = this.fb.group({

    });

  }

  onSubmitContactDetailsForm(){

  }
  onClickAddContact(){
    this.showAddContactSection = !this.showAddContactSection;
  }
}
