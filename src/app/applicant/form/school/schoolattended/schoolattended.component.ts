import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { NgForOf } from '@angular/common';
import { Util } from "../utilities";
import { ApiService } from 'src/app/api.service';
import { MatSnackBarModule, MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-schoolattended',
  templateUrl: './schoolattended.component.html',
  styleUrls: ['./schoolattended.component.scss']
})
export class SchoolattendedComponent implements OnInit {

  selectedTab: number = 0;
  jamb={"regno": "", "examno": "", "year": ""}
  two: any ="onesitting";

  constructor(private api: ApiService, private _snackBar: MatSnackBar) { }

  submit(){

    this.api.jambdetail(this.jamb).subscribe(res => {
      console.log(this.jamb);
      localStorage.setItem("jambno", JSON.stringify(this.jamb))
      this._snackBar.open("Save Successful!!!", "Save", {
        duration: 2000,
      });
      
    })
  }

  selectedSitting(data){
    this.two = data.value
    console.log(this.two);
  }

  ngOnInit() {
  }

  ELEMENT_DATA: Element[] = [
    // {id: 1, schoolname: 'Helium', schooltype: 'primary', schoolstate: 'abeokuta', datefrom: '1/1/1', dateto:'2/3/2'},
    // {id: 2, schoolname: 'steady', schooltype: 'tetiary', schoolstate: 'abeokuta', datefrom: '1/2/1', dateto:'2/2/4'},
    // {id: 3, schoolname: 'new', schooltype: 'primary', schoolstate: 'adama', datefrom: '7/1/1', dateto:'2/2/1'},
  ];

  GRADE_DATA: Grade[] = [

  ];

  GRADE_DATA2: Grade2[] =[

  ];

  years = Util.years 

  name = '';
  school='';
  state='';
  from='';
  to='';
  id: number = 0;

  subject = '';
  grade = '';

  subject2 = '';
  grade2 = '';

  displayedData2 = ['title2', 'position2','del'];
  resultGrade2 = new MatTableDataSource(this.GRADE_DATA2);

  displayedColumns = ['schoolname', 'schooltype', 'schoolstate', 'datefrom', 'dateto','del'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  displayedData = ['title', 'position','del'];
  resultGrade = new MatTableDataSource(this.GRADE_DATA);




  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }

  addData2(){
    if (this.subject2 == "" || this.grade2 == "") {
      alert('Please fill in Subject')
      return
    }
    else{
      this.subject2 == "" || this.grade2 == "";
    }

    this.GRADE_DATA2.push({id: this.id += 1, title2: this.subject2, position2: this.grade2})
    this.resultGrade2 = new MatTableDataSource(this.GRADE_DATA2);
  }

  addData() {
    if (this.subject == "" || this.grade == "") {
      alert('Please fill in Subject')
      return
    }
    else{
      this.subject == "" || this.grade == ""
    }

    this.GRADE_DATA.push({id: this.id += 1, title: this.subject, position: this.grade})
    this.resultGrade = new MatTableDataSource(this.GRADE_DATA);
  }

  addElement() {

    if (this.name == "" || this.school == "" || this.state == "" || this.from == "" || this.to == "") {
      alert('Please input the form')
      return
    }
    else{
      this.name == "" || this.school == "" || this.state == "" || this.from == "" || this.to == ""
    }

    this.ELEMENT_DATA.push({id: this.id += 1, schoolname: this.name, schooltype: this.school, schoolstate: this.state, datefrom: this.from, dateto: this.to})
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    console.log(this.ELEMENT_DATA);
  }

  deleteItem(id){
    console.log(id);
    
    this.ELEMENT_DATA = this.ELEMENT_DATA.filter(value => {
      return value.id != id.id
    })

  this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  }

  deletePost(id){
    console.log(id);
    
    this.GRADE_DATA = this.GRADE_DATA.filter(value => {
      return value.id != id.id
    })
    this.resultGrade = new MatTableDataSource(this.GRADE_DATA);
  }

  deletePost2(id){
    console.log(id);

    this.GRADE_DATA2 = this.GRADE_DATA2.filter(value => {
      return value.id != id.id
    })
    this.resultGrade2 = new MatTableDataSource(this.GRADE_DATA2);
  }
}

export interface Grade2{
id: number;
title2: string;
position2: string;
}

export interface Grade {
id: number;
title: string;
position: string;
}

export interface Element {
id: number;
schoolname: string;
schooltype: string;
schoolstate: string;
datefrom: string;
dateto: string;
// del: any; 
}

