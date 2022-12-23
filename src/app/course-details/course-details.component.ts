import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseId:any
  course:any
  file:any
  linkVideo:any
  comments:any;
  constructor(private route:ActivatedRoute,private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseId=this.route.snapshot.paramMap.get("id");
    this.getCourseById();
    this.getComments();
  }
  getCourseById(){
    this.courseService.getCourseById(this.courseId).subscribe(data=>{
      this.course=data
      this.linkVideo=this.course[0].lessons[0].videoLink
    })
  }
  onSelect(event:any) {
    this.file=event.target.files[0]
    
	}
  addLesson(form:any){
    const formdata=new FormData();
    formdata.append('name',form.name);
    formdata.append('video',this.file); 
    this.courseService.addLesson(this.courseId,formdata).subscribe(data=>{
      this.getCourseById(); 
      document.getElementById('closssse')?.click()
      $("#courseForm").trigger("reset");
    })
  }
  setVideo(linVideo:any){
    document.getElementById('vvideo')?.setAttribute('src',linVideo);
    (<HTMLVideoElement>document.getElementById('vvideo'))?.play()
    this.linkVideo=linVideo;
  }
  submitComment(form:any){
    this.courseService.submitComment(this.courseId,form).subscribe(data=>{      
      $("#commentForm").trigger("reset");
      this.getComments()
    })
  }
  getComments(){
    this.courseService.getComments(this.courseId).subscribe(data=>{
      this.comments=data      
    })
  }
  deleteComment(id:any){
    var a={"idComment":id}
    this.courseService.deleteComment(this.courseId,a).subscribe(data=>{
      this.getComments()
    })
  }
}
