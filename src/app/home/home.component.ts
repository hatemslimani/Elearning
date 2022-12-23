import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses:any
  constructor(private authService:AuthServiceService,private courseService:CourseService) { }

  ngOnInit(): void {
    this.getTopCourse()
  }
  getTopCourse(){
    this.courseService.getTopCourse().subscribe(data=>{     
      this.courses=data
    })
  }
}
