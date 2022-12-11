import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder,UntypedFormGroup, Validators } from '@angular/forms';
import { NewPostService } from 'src/app/services/new-post.service';

@Component({
  selector: 'app-post-payments',
  templateUrl: './post-payments.component.html',
  styleUrls: ['./post-payments.component.scss']
})
export class PostPaymentsComponent implements OnInit {
  @Output() transferClose4Stage = new EventEmitter<boolean>()
  @Output() transferComplete4Stage = new EventEmitter<boolean>()
  assetPayments!:UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private newPostService:NewPostService) { }

  ngOnInit(): void {
    this.assetPayments = this.fb.group({
      builtArea:this.fb.control('',Validators.pattern("^[0-9]*$")),
      totalArea:this.fb.control('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      assetPrice:this.fb.control('',Validators.pattern("^[0-9]*$")),
      assetEntrDate:this.fb.control('',Validators.required),
      assetEntrDateImmediately:this.fb.control(''),
      assetEntrDateFlex:this.fb.control(''),
    });
  }

  onSubmitPaymentsForm(){
    if(!this.assetPayments.valid){
      return;
    }
    this.transferComplete4Stage.emit(true);
    this.newPostService.onGetPaymentsAsset(this.assetPayments);

  }
  onClickReturn(){
    this.transferClose4Stage.emit(false);
  }

  onDateClick(){
      this.assetPayments.get('assetEntrDateImmediately')!.reset()
      this.assetPayments.get('assetEntrDateFlex')!.reset()
  }

  onImmDateClick(){
    this.assetPayments.get('assetEntrDate')!.reset()
    this.assetPayments.get('assetEntrDateFlex')!.reset()
  }

  onFlexDateClick(){
    this.assetPayments.get('assetEntrDateImmediately')!.reset()
    this.assetPayments.get('assetEntrDate')!.reset()
  }
}
