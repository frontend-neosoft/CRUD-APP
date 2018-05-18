import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class SchoolAppService {


  constructor(private http:HttpClient) { }

  data = [],
  filteredData = [],
  activeForEdit = {};

  changeStatus(school, status){
    this.data.map(function(item){
      if(item.school_id == school.school_id) item.active = status
    })

    console.log(this.data);
  }
  setSchoolToEdit(school_id){

    this.activeForEdit = this.data.filter((item)=>{
      if(item.school_id == school_id) return item
    })


  }
  getActiveForEdit(){
    return this.activeForEdit[0]
  }
  editSchool(school_id, newValues){
    this.data.map((item, key)=>{
      if(item.school_id == school_id) this.data[key] = newValues
    })
  }
  getSchoolData(){

    var data = this.http.get("../assets/school_data.json").map(
      (data=>{
        return this.saveData(data)
      })
    )

    return data
  }


  saveData(data){
    if(!this.data.length && !this.filteredData.length){
      this.data = data
      this.filteredData = data
    }
    return this.filteredData
  }
  addSchool(school){
    this.data.push(school)
  }
  getData(){
    return this.filteredData
  }

}
