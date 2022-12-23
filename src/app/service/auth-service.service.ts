import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //a={token:'',role:''}
  private uri:String="http://localhost:3000/users/";
  constructor(private http:HttpClient ,private route:Router) { }

  register(data:any){
    return this.http.post(this.uri+"signUp",data);
  }
  login(log:any)
  {
    return this.http.post(this.uri+"login",log)/*.subscribe((data:any)=>{
      let a=data.token
      console.log(a);
      localStorage.setItem("token",a)
      //this.route.navigate(['/dashboard/home'])
    });*/
  }
}
