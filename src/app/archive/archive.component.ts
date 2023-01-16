import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Order } from '../models/orders';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  completed_orders:Order[];
  constructor(private service : OrdersService) { }

  ngOnInit(): void {
    this.getCompletedOrders();
  }
  async getCompletedOrders() {
 
    await lastValueFrom(this.service.getOrders('completed'))
    this.completed_orders=this.service.orders
  }
}
