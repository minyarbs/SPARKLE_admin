import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { __param } from 'tslib';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
list: Admin[]
  constructor( private http: HttpClient) { }
getList(){
  this.list=[]
  return  this.http.get<{[id: string]: Admin}>('http://localhost:3000/admin')
  .pipe(map((res)=>{
    for(const id in res){
      if(res.hasOwnProperty(id)){
      this.list.push({...res[id], _id:id})
    } 
   
  }
  }))
}
postNew(username:string,password:string){
  
 const res= this.http.post('http://localhost:3000/admin',{"UserName":username,"Password":password})
 return res
}
deleteAccount(id:number){
  return this.http.delete('http://localhost:3000/admin/'+id)
  
}
}