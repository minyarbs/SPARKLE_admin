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
  return  this.http.get<{[id:string]: Supplier}>('http://localhost:3000/suppliers-accounts')
  .pipe(map((res)=>{
    for(const id in res){
      if(res.hasOwnProperty(id)){
      this.list.push({...res[id], _id:id})
    } 
   
  }
  }))
}
postNew(username:string,password:string, role: string){
  
 const res= this.http.post('http://localhost:3000/suppliers-accounts',{"UserName":username,"Password":password,"Role":role})
 return res
}
deleteAccount(id:number){
  return this.http.delete('http://localhost:3000/suppliers-accounts/'+id)
  
}
}
