import { Component, Input, OnInit } from '@angular/core';
import { Appartement } from 'src/app/models/appartement.model';

@Component({
  selector: 'app-appartement-post',
  templateUrl: './appartement-post.component.html',
  styleUrls: ['./appartement-post.component.scss']
})
export class AppartementPostComponent implements OnInit {
  @Input() appartement!: Appartement;

  detailsShow:boolean = false;
  expandedPost:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClickOwnerDetails(event:any){
    event.stopPropagation();
    this.detailsShow = !this.detailsShow
  }
  onClickExpanPost(){
    this.expandedPost = !this.expandedPost;
    this.detailsShow = false;
  }
}


