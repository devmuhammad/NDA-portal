import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rrr',
  templateUrl: './rrr.component.html',
  styleUrls: ['./rrr.component.scss']
})
export class RrrComponent implements OnInit {

  // purchaseData = {'name': "", "email": "", "confirmEmail": "", "number": ""}
  load = {"name" : "", "email": "", "RRR": ""}
  errorMsg: string;
  rrrdata: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.rrrdata = this.fb.group({
      'name': [''],
      'email': [''],
      'confirmEmail': [''],
      'number': ['']
    })
  }
 
  checkEmailMatch() {
    let data = this.rrrdata

    if (data.get('email').value !== data.get('confirmEmail').value){
      this.errorMsg = "Email does not match"
      data.get('confirmEmail').value == ""
    }
    else {
      this.errorMsg = ""
    }
      
  }

  pinPurchase(){
    let data = this.rrrdata

    if(data.get('name').value == "" || data.get('email').value == "" || data.get('confirmEmail').value == "" || data.get('number').value == ""){
        alert("Please, fill in the form!")
        return
    }

    let arr = (Math.floor(Math.random() * 1000000000000000).toString())
    
    console.log(arr)

    this.load.name = data.get('name').value
    this.load.email = data.get('email').value
    this.load.RRR = arr

    this.api.purchase(this.load).subscribe(res => {
    console.log(this.load); 
    alert('SUCCESSFULL : Your rrr code is :' + arr) 
    // this.purchaseData = { "name": "", "email": "", "confirmEmail": "", "number":"",}
    localStorage.setItem("rrr", JSON.stringify(this.load))
    window.location.href = "/signup"
    })

    

  }

}
