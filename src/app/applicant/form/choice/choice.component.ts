import { Component, OnInit } from '@angular/core';
import { Util } from "../school/utilities";
import { ApiService } from 'src/app/api.service';
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  departments = Util.departments
  faculties = Util.faculties
  courses = Util.courses

  crs:any;
  dpt:any;

  dptclicked = false
  crsclicked = false

  departmentValue:any;
  facultyValue: any;

  choice = {"firstchoice": "", "secondchoice": "", "faculty": "", "department": "", "course": ""}

  constructor(private api: ApiService, private _snackBar: MatSnackBar) { }

  submit(){

    if(this.choice.firstchoice == "" || this.choice.secondchoice == "" || this.choice.faculty == "" || this.choice.department == "" || this.choice.course == ""){
      return
    }
    else{
      this.choice.department = this.departmentValue.name
      this.choice.faculty = this.facultyValue.name
      this.api.choices(this.choice).subscribe(res => {
        localStorage.setItem("choices", JSON.stringify(this.choice))
        this._snackBar.open("Save Successful!!!", "Save", {
          duration: 4000,
        });
        console.log(this.choice);
        
      })
    }
  }

  ngOnInit() {
  } 

  selectedFaculty(faculty){
    this.dptclicked = true
    this.facultyValue = faculty
    let dept = this.departments;
    this.dpt = dept.filter(
      (dpts) => dpts.facultyid == faculty.id);
  }

  selectedDept(dept){
    this.crsclicked = true
    this.departmentValue = dept
    let crse = this.courses;
    this.crs = crse.filter(      
      (crses) => crses.departmentid == dept.id);
      console.log(this.crs);
  }
}
