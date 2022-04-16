import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-widget-categories',
  templateUrl: './widget-categories.component.html',
  styleUrls: ['./widget-categories.component.css']
})
export class WidgetCategoriesComponent implements OnInit {

  categories: Array<any> =[];
  querySub:any;

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.querySub = this._postService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

}
