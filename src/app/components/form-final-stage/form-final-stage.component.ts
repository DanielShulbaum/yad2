import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { NewPostService } from 'src/app/services/new-post.service';

@Component({
  selector: 'app-form-final-stage',
  templateUrl: './form-final-stage.component.html',
  styleUrls: ['./form-final-stage.component.scss']
})
export class FormFinalStageComponent implements OnInit {
  finalStage!:FormGroup;
  constructor(private fb: FormBuilder, private newPostService:NewPostService) { }

  ngOnInit(): void {
    this.finalStage = this.fb.group({

    });
  }

  onSubmitFinalStageForm(){
    this.newPostService.OnAddNewPost()
  }
}
