import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  postData: BlogPost={_id:'',title:'',postDate:'',featuredImage:'',
  post:'',postedBy:'',comments:[],category:'',tags:[],isPrivate:false,
  views:0};

  querySub:any;
  subId:any;

  commentName:string='';
  commentText:string='';

  constructor(private _postService:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params=>{
      this.subId = this._postService.getPostbyId(params['id']).subscribe(data=>{
        this.postData = data;
      })
    })
  }

  submitComment(){
    this.postData.comments.push({author:this.commentName, comment:this.commentText, date:new Date().toLocaleDateString()});
    this._postService.updatePostById(this.postData._id,this.postData).subscribe(data=>{
      console.log(data);
    });
    this.commentName="";
    this.commentText="";
  }

  ngOnDestroy(){
    if(this.querySub) this.querySub.unsubscribe();
  }

}
