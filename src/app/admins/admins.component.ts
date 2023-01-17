import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Admin } from '../models/admin';
import { AdminsService } from '../services/admins.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(private readonly ser:AdminsService) { }
  list: Admin[]
  newSup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
});
  ngOnInit(): void {
this.getList();
  }
  async getList(){
    await lastValueFrom(this.ser.getList());
    this.list = this.ser.list
  }
  async delete(id: number){
    await lastValueFrom(this.ser.deleteAccount(id));
    this.getList();
    
  }
  async onSubmit(){
    
    await lastValueFrom(this.ser.postNew(this.newSup.value.username,this.newSup.value.password));
    this.getList()
    this.newSup.reset()
  }

}
