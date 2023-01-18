import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Order } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
orders:Order[]
  constructor(private http:HttpClient) { }
  getOrders(status:string){
    this.orders=[]
    return  this.http.get<{[key: string]: Order}>('http://localhost:3000/orders/'+status)
    .pipe(map((res)=>{
      for(const key in res){
        
        if(res.hasOwnProperty(key)){
        this.orders.push({...res[key], _id:key})
        
       
      } 
     
    }
    }))
 
  }
  update(ord:Order){
    ord.paid=true
    return this.http.patch('http://localhost:3000/orders/'+ord.id,ord)
  }
  delete(id:number){
    return this.http.delete('http://localhost:3000/orders/'+id)
  }
}
