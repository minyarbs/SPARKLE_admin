import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Review } from '../models/review';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
list:Review[]
  constructor(private readonly service:ReviewsService) { }

  async ngOnInit() {
    await lastValueFrom(this.service.getList());
    this.list=this.service.list;
  }

}
