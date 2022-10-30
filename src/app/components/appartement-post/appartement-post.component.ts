import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartement-post',
  templateUrl: './appartement-post.component.html',
  styleUrls: ['./appartement-post.component.scss']
})
export class AppartementPostComponent implements OnInit {
  detailsShow:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClickOwnerDetails(){
    this.detailsShow = !this.detailsShow
  }
}
