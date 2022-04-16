import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost:BlogPost={_id:'',title:'',postDate:'',featuredImage:'',
  post:'',postedBy:'',comments:[],category:'',tags:[],isPrivate:false,
  views:0};

  tags:string="";

  constructor(private _postService:PostService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this._postService.getPostbyId(id).subscribe(data=>{
      this.blogPost = data;
      this.tags = this.blogPost.tags.toString();
    });
  }

  formSubmit(){
    this.blogPost.tags = this.tags.split(",").map(tag=>tag.trim());
    this._postService.updatePostById(this.blogPost._id,this.blogPost).subscribe(data=>{
      this.router.navigate(['admin']);
    });
    
  }

  deletePost(){
    this._postService.deletePostById(this.blogPost._id).subscribe(data=>{
      this.router.navigate(['admin']);
    });
    
  }
}
