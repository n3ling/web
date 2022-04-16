import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts(page: any,tag: any,category: any):Observable<BlogPost[]>{
    let url = `https://desolate-harbor-67874.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;
    if (tag!=''&&tag!=null){
      url += `&tag=${tag}`;
    }
    if (category!=''&&tag!=null){
      url += `&category=${category}`;
    }
    return this.http.get<BlogPost[]>(url);
  }

  getPostbyId(id: any): Observable<BlogPost>{
    let url = `https://desolate-harbor-67874.herokuapp.com/api/posts/${id}`;
    return this.http.get<BlogPost>(url); 
  }

  getCategories(): Observable<any>{
    let url = "https://desolate-harbor-67874.herokuapp.com/api/categories";
    return this.http.get<any>(url);
  }

  getTags():Observable<string[]>{
    let url = "https://desolate-harbor-67874.herokuapp.com/api/tags";
    return this.http.get<string[]>(url);
  }

  getAllPosts(): Observable<BlogPost[]>{
    let url = `https://desolate-harbor-67874.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`;
    return this.http.get<BlogPost[]>(url);
  }

  newPost(data: BlogPost):Observable<any>{
    return this.http.post<any>(`https://desolate-harbor-67874.herokuapp.com/api/posts`,data);
  }

  updatePostById(id:string,data:BlogPost):Observable<any>{
    return this.http.put<any>(`https://desolate-harbor-67874.herokuapp.com/api/posts/${id}`,data);
  }

  deletePostById(id:string):Observable<any>{
    return this.http.delete<any>(`https://desolate-harbor-67874.herokuapp.com/api/posts/${id}`);
  }
}
