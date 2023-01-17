import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Theme } from '../models/theme';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  constructor(private ser: ThemesService) { }

  list: Theme[]
  newSup = new FormGroup({
   party_type: new FormControl(''),
    theme_name: new FormControl(''),
    cost: new FormControl(''),
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
    
    await lastValueFrom(this.ser.postNew(this.newSup.value.theme_name,this.newSup.value.party_type,Number(this.newSup.value.cost)));
    this.getList()
    this.newSup.reset()
  }
}
