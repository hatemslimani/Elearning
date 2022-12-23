import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent,
    children:[
      {
        path:'',component:HomeComponent
      },
      {
        path:'courses',component:CoursesComponent
      },
      {
        path:'home',component:MyCoursesComponent
      },
      {
        path:'details/:id',component:CourseDetailsComponent
      },
      {
        path:'profil',component:ProfilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
