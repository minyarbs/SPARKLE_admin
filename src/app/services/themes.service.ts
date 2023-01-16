import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { __param } from 'tslib';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
list: Theme[]
  constructor( private http: HttpClient) { }
getList(){
  this.list=[]
  return  this.http.get<{[_id: string]: Theme}>('http://localhost:3000/products')
  .pipe(map((res)=>{
    for(const _id in res){
      if(res.hasOwnProperty(_id)){
      this.list.push({...res[_id], id:_id})
    } 
   
  }
  }))
}
getListByParty(party_type:string){
  this.list=[]
  return  this.http.get<{[_id: string]: Theme}>('http://localhost:3000/products/'+party_type)
  .pipe(map((res)=>{
    for(const _id in res){
      if(res.hasOwnProperty(_id)){
      this.list.push({...res[_id], id:_id})
    } 
   
  }
  }))
}
postNew(theme_name:string,
  party_type:string,
  cost:number,){
  
 return this.http.post('http://localhost:3000/products',{"theme_name":theme_name,"party_type":party_type,"cost":cost})
 
}
deleteAccount(id:string){
  return this.http.delete('http://localhost:3000/products/'+id)
  
}
}
