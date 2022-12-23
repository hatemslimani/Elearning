import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
    
  private uri:String="http://localhost:3000/";
  constructor(private http:HttpClient ,private route:Router) { }

  getAllCategory(){
    return this.http.get(this.uri+"category");
  }
  addCourse(form: any) {
    return this.http.post(this.uri+"courses",form);
  }
  getAllCourse() {
    return this.http.get(this.uri+"courses");
  }
  getTopCourse() {
    return this.http.get(this.uri+"courses/top");
  }
  getLastCourse() {
    return this.http.get(this.uri+"courses/last");
  }
  searchByname(name: String) {
    return this.http.post(this.uri+"courses/searchName",name);
  }
  searchByCategory(id:any) {
    return this.http.post(this.uri+"courses/searchByCategory",id);
  }
  getCourseById(id:any) {
    return this.http.get(this.uri+"courses/"+id);
  }
  addLesson(id:any,data:any) {   
      return this.http.post(this.uri+"courses/addLesson/"+id,data);
  }
  submitComment(courseId: any, form: any) {
    return this.http.post(this.uri+"courses/addComment/"+courseId,form);
  } 
  getComments(courseId: any) {
    return this.http.get(this.uri+"courses/comments/"+courseId);
  } 
  deleteComment(courseId:any,data: any) {   
    return this.http.post(this.uri+"courses/comments/delete/"+courseId,data);
  }
}
