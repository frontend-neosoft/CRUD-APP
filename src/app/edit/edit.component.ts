import { Component, OnInit } from '@angular/core';
import { SchoolAppService } from '../school-app.service'
import { NavigationComponent } from '../navigation/navigation.component';
import {Router} from '@angular/router'

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  record = {
    code:undefined,
    type:undefined,
    name_en:undefined,
    name_zh:undefined,
    active:undefined
  }
  constructor(private _appData: SchoolAppService, private router:Router) { }

  ngOnInit() {
    this.record = this._appData.getActiveForEdit()
    console.log(this.record)
  }

  saveEdits(school_id){
    if(this.record.name_en && this.record.code){

      this._appData.editSchool(school_id, this.record)
      this.router.navigate([''])
    }
    else{
      alert('Please fill in required fields.')
    }
  }

}
