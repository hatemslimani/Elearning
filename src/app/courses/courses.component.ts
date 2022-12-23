import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  category:any;
  courses:any;
  lastCourses:any;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getAllCourse()
    this.getAllCategory()
    this.getLastCourse()
  }
  getAllCategory(){
    this.courseService.getAllCategory().subscribe(data=>{
      this.category=data
    })
  }
  getAllCourse(){
    this.courseService.getAllCourse().subscribe(data=>{
      this.courses=data
    })
  }
  getLastCourse(){
    this.courseService.getLastCourse().subscribe(data=>{
      this.lastCourses=data
    })
  }
  searchByname(form:any){
    this.courseService.searchByname(form).subscribe(data=>{
      this.courses=data
    })
  }
  searchByCategory(form:any){
    this.courseService.searchByCategory(form).subscribe(data=>{
      console.log(data);
      
      this.courses=data
    })    
  }
}
