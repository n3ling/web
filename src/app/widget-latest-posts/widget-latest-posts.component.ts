import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-widget-latest-posts',
  templateUrl: './widget-latest-posts.component.html',
  styleUrls: ['./widget-latest-posts.component.css']
})
export class WidgetLatestPostsComponent implements OnInit {

  posts: Array<BlogPost> =[]
  querySub:any;

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this.querySub = this._postService.getPosts(1,null,null).subscribe(data=>{
      this.posts = data.slice(0,3);
    })
  }

}
