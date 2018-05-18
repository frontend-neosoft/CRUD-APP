import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { SchoolAppService } from '../school-app.service'
import {Router} from '@angular/router'

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  alphabeticalSort = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  selectedSchools = []
  schoolData = []
  copyData = []
  searchString = undefined
  filterStatus = undefined


  constructor(private _appData: SchoolAppService, private router:Router) {

  }

  search(){
    console.log(this.filterStatus)
    if(this.filterStatus != 'all'){
      this.filterStatus = Boolean(parseInt(this.filterStatus))
    }
    else{
      this.filterStatus = 'all'
    }
    this.schoolData = this.copyData.filter((item)=>{

      if(this.searchString && this.filterStatus == 'all'){
        if(item.name_en.indexOf(this.searchString) != -1){
          return item
        }
      }
      else if(!this.searchString && this.filterStatus != 'all'){
        if(item.active == this.filterStatus){
          return item
        }
      }
      else if(this.searchString && this.filterStatus != 'all'){
        if((item.name_en.indexOf(this.searchString) != -1) && (item.active == this.filterStatus)){
          return item
        }
      }
      else{
        return item
      }

    })
  }

  filterByAlphabet(alphabet){

      this.schoolData = this.copyData.filter((item)=>{
        if(alphabet != "All"){
          if(item.name_en){
            if(item.name_en[0].toLowerCase() == alphabet.toLowerCase()) return item
          }
        }
        else{
          return item
        }
      })
    }


  
  changeSelection(){

    this.selectedSchools = this.schoolData.filter((school)=>{
      if(school.selected) return school
    })

  }

  navigateToEdit(){
    if(this.selectedSchools.length != 1){
      alert("Please select at least and at most one school");
      return
    }
    var schoolToEdit = this.selectedSchools[0]


    this._appData.setSchoolToEdit(schoolToEdit.school_id)
    // this._appData.editSchool(schoolToEdit.school_id)
    this.router.navigate(['edit'])
  }

  changeStatus(status){

    this.selectedSchools.map((item)=>{
      this._appData.changeStatus(item,status)
    })


  }

  changeActiveClick(){
  this.selectedSchools = this.schoolData
  }


  ngOnInit() {
    this._appData.getSchoolData().subscribe((res)=>{
      this.copyData = this._appData.getData()
      this.schoolData = Object.assign([], this.copyData)
    });

  }

}
