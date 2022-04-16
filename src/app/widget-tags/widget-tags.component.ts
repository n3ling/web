import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-widget-tags',
  templateUrl: './widget-tags.component.html',
  styleUrls: ['./widget-tags.component.css']
})
export class WidgetTagsComponent implements OnInit {

  tags: Array<string> =[];
  querySub:any;

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this.querySub = this._postService.getTags().subscribe(data =>{
      this.tags = data;
    })
  }

}
