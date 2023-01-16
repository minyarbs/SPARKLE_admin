import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Supplier } from '../models/supplier';
import { SuppliersService } from '../services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  constructor( private ser: SuppliersService) { }
  
  list: Supplier[]
  newSup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
});
  ngOnInit(): void {
this.getList();
  }
  async getList(){
    await lastValueFrom(this.ser.getList());
    this.list = this.ser.list
  }
  async delete(id: string){
    await lastValueFrom(this.ser.deleteAccount(id));
    this.getList();
    
  }
  async onSubmit(){
    
    await lastValueFrom(this.ser.postNew(this.newSup.value.username,this.newSup.value.password,this.newSup.value.role));
    this.getList()
    this.newSup.reset()
  }

}
