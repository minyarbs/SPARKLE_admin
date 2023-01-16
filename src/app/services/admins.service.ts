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
  return  this.http.get<{[_id: string]: Admin}>('http://localhost:3000/admins/all')
  .pipe(map((res)=>{
    for(const _id in res){
      if(res.hasOwnProperty(_id)){
      this.list.push({...res[_id], id:_id})
    } 
   
  }
  }))
}
postNew(username:string,password:string){
  
 const res= this.http.post('http://localhost:3000/admins/new',{"username":username,"password":password})
 return res
}
deleteAccount(id:string){
  return this.http.delete('http://localhost:3000/admins/'+id)
  
}
}