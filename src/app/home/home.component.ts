import { Component, OnInit } from '@angular/core';
import { lastValueFrom, withLatestFrom } from 'rxjs';
import { Order } from '../models/orders';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quote: string
  incompleted_orders: Order[];
  myDate = new Date();
  pourcentage_table: number[] = [];
  date = this.myDate.toLocaleString('en-us', { weekday: 'long' }) + ' ' + (this.myDate.getDate()) + ' ' + this.myDate.toLocaleString('en-us', { month: 'long' }) + ' ' + this.myDate.getFullYear();

  constructor(
    private auth: AuthService,
    private service: OrdersService,
  ) { }

  ngOnInit(): void {
    this.getinCompletedOrders();
    this.getQuote();
  }


  async getinCompletedOrders() {
    this.pourcentage_table = []
    await lastValueFrom(this.service.getOrders('not completed'))
    this.incompleted_orders = this.service.orders
    for (let i = 0; i < this.incompleted_orders.length; i++) {
      let num = 0;
      if (this.incompleted_orders[i].balloons_order === 'not ready') num++;
      if (this.incompleted_orders[i].flower_order === 'not ready') num++;
      if (this.incompleted_orders[i].cake_order === 'not ready') num++;
      if (this.incompleted_orders[i].deco_order === 'not ready') num++;
      if (this.incompleted_orders[i].snacks_order === 'not ready') num++;
      this.pourcentage_table[i] = ((5 - num) / 5) * 100
    }

  }
  seedetails(i: number) {
    this.incompleted_orders[i].clicked = true
  }
  hidedetails(i: number) {
    this.incompleted_orders[i].clicked = false
  }
  async getQuote() {
    this.quote = await lastValueFrom(this.auth.getQuote())
  }
  completePay(id:string){
    
  }
}
