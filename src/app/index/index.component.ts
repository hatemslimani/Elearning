import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
  register(data:any){   
    this.authService.register(data).subscribe(d=>{
      document.getElementById('closse')?.click()
      $("#userForm").trigger("reset");
    })
  }
  login(data:any){   
    this.authService.login(data).subscribe((d:any)=>{
      localStorage.setItem("token",d.token)
      localStorage.setItem("role",d.role)
      document.getElementById('closssse')?.click()
      $("#userLogin").trigger("reset");
    })
  }
  logOut(){   
    localStorage.clear()   
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getRole(){
    return localStorage.getItem('role')
  }
  
}
