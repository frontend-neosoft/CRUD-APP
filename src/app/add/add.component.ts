import { Component, OnInit } from '@angular/core';

import { PageHeaderComponent } from '../page-header/page-header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { SchoolAppService } from '../school-app.service'
import {Router} from '@angular/router'


@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _appData: SchoolAppService, private router:Router) { }

  record = {
    name_en:undefined,
    name_zh:undefined,
    active:false,
    school_id:undefined,
    code:undefined,
    type:undefined
  }

  addSchool(){
    if(this.record.name_en && this.record.code){
      this.record.school_id = "school-"+(this._appData.getData()).length
      this._appData.addSchool(this.record)
      this.router.navigate([''])
    }
    else{
      alert("Please fill in required fields.")
    }
  }
  ngOnInit() {

  }

}
