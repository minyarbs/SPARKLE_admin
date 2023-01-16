import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { __param } from 'tslib';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
list: Supplier[]
  constructor( private http: HttpClient) { }
getList(){
  this.list=[]
  return  this.http.get<{[_id: string]: Supplier}>('http://localhost:3000/suppliers-accounts/all')
  .pipe(map((res)=>{
    for(const _id in res){
      if(res.hasOwnProperty(_id)){
      this.list.push({...res[_id], id:_id})
    } 
   
  }
  }))
}
postNew(username:string,password:string, role: string){
  
 const res= this.http.post('http://localhost:3000/suppliers-accounts/new',{"username":username,"password":password,"role":role})
 return res
}
deleteAccount(id:string){
  return this.http.delete('http://localhost:3000/suppliers-accounts/'+id)
  
}
}
