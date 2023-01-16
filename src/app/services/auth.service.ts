import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
text :string;
error:string;

  constructor(
    public route:Router,
    private http:HttpClient
  ) { }
  login(username:string,password:string){
   return this.http.post('http://localhost:3000/admins/Login',{"username":username,"password":password})
    
  }
  logout(){
localStorage.removeItem('loggedIn')
this.route.navigate(['login'])
  }
  get isloggedin(): boolean{
    let val=localStorage.getItem('loggedIn')
    if (val==='true')  {
      return true;
    }
    else {
      return false;
    }
  }

  register(){

  }
  getQuote(){
    return this.http.get('http://localhost:3000/quotes',{responseType:'text'})
  }

}
