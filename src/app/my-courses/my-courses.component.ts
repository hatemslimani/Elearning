import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import $ from 'jquery'
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  category:any;
  courses:any
  file:any;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getAllCourse()
    this.getAllCategory()
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
  addCourse(form:any){ 
    const formdata=new FormData();
    formdata.append('contents',form.contents);
    formdata.append('description',form.description);
    formdata.append('categoryID',form.categoryID);
    formdata.append('name',form.name);
    formdata.append('image',this.file); 
    this.courseService.addCourse(formdata).subscribe(data=>{
      document.getElementById('closssse')?.click()
      $("#courseForm").trigger("reset");
    })
    
  }
  onSelect(event:any) {
    this.file=event.target.files[0]
    
	}
  getRole(){
    console.log(localStorage.getItem('role'));
    
    return localStorage.getItem('role')
  }
}
