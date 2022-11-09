import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-payments',
  templateUrl: './post-payments.component.html',
  styleUrls: ['./post-payments.component.scss']
})
export class PostPaymentsComponent implements OnInit {
  assetPayments!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.assetPayments = this.fb.group({

    });
  }

  onSubmitPaymentsForm(){

  }
}
