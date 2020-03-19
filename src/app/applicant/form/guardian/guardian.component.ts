import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrls: ['./guardian.component.scss']
})
export class GuardianComponent implements OnInit {

  guardianData = {"parentName1": "", "email1": "", "number1": "", "relationship1": "", "address1": "", "parentName2": "", "email2": "", "number2": "",
              "relationship2": "", "address2": ""}

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  submit(){

    if(this.guardianData.parentName1 == "" || this.guardianData.email1 == "" || this.guardianData.number1 == "" || this.guardianData.relationship1 == ""
        || this.guardianData.address1 == "" ){
     return
    }
    else{
      this.api.guardianDetails(this.guardianData).subscribe (res =>{
      console.log(this.guardianData);  
      })
    }
  }

}
