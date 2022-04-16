import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponent } from './post-card/post-card.component';
import { WidgetSearchComponent } from './widget-search/widget-search.component';
import { WidgetLatestPostsComponent } from './widget-latest-posts/widget-latest-posts.component';
import { WidgetCategoriesComponent } from './widget-categories/widget-categories.component';
import { WidgetTagsComponent } from './widget-tags/widget-tags.component';
import { PostDataComponent } from './post-data/post-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PagingComponent } from './paging/paging.component';
import { FooterPostsComponent } from './footer-posts/footer-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostCardComponent,
    WidgetSearchComponent,
    WidgetLatestPostsComponent,
    WidgetCategoriesComponent,
    WidgetTagsComponent,
    PostDataComponent,
    PagingComponent,
    FooterPostsComponent,
    PostsTableComponent,
    EditPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
