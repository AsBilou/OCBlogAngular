import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoves: number;
  @Input() postDate;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.postLoves = this.postLoves+1;
  }

  onDontLoveIt(){
    this.postLoves = this.postLoves-1;
  }

}
