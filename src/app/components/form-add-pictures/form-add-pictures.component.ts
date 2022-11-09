import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-add-pictures',
  templateUrl: './form-add-pictures.component.html',
  styleUrls: ['./form-add-pictures.component.scss']
})
export class FormAddPicturesComponent implements OnInit {
  assetPictures!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.assetPictures = this.fb.group({

    });
  }

  onSubmitPictures(){

  }
}
