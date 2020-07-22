import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "../api.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  Users = [];
  emailError = ''
  paymentName:any = []

  // signUpData = { "name": "", "Email": "", "PhoneNumber":"", "password": "", "confirmPassword": "", "RRR": ""}
  payload = { "name": "", "Email" : "", "PhoneNumber": "", "password": "", "RRR": ""}
  errorMsg: string;
  errorRRR: string;

  rrrcode = {}

  currentEvent: any = {id: null, name: '', description: '', date: new Date()};
  signUpDetail: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getRRR();
    
    this.rrrcode = JSON.parse(localStorage.getItem("rrr"))
    console.log(this.rrrcode);
    
    this.signUpDetail = this.fb.group({
      'name': [''],
      'Email': [''],
      'PhoneNumber': [''],
      'password': [''],
      'confirmPassword': [''],
      'RRR': ['']      
    })
  }


  checkPasswordMatch() {
  let detail = this.signUpDetail


    if (detail.get('password').value !== detail.get('confirmPassword').value){
      this.errorMsg = "Password does not match"
      detail.get('confirmPassword').value == ""
    }
    else {
      this.errorMsg = ""
    }
      
  }

  getRRR(){
    this.api.getPayment().subscribe( res => {
       this.paymentName = res
       console.log(this.paymentName)
    })
  }

  checkRRR(){
    let detail = this.signUpDetail

    for( var i = 0; i < this.paymentName.length; i++ ){
      if(detail.get('Email').value == this.paymentName[i].email  && detail.get('RRR').value == this.paymentName[i].RRR){
        console.log(this.paymentName[i], "fyu");   
        this.errorRRR=""
        return        
      }
      else {
        console.log("Not found");
        console.log(this.signUpDetail);
        this.errorRRR = "The RRR does not match this User!"
        detail.get('RRR').value == ''
      }
    }

  }

  signUp(){
   
    let detail = this.signUpDetail

    if(detail.get('name').value == "" || detail.get('Email').value == "" || detail.get('PhoneNumber').value == "" || detail.get('password').value == "" || 
    detail.get('confirmPaswword').value == "" || detail.get('RRR').value == ""){
      alert("Please, fill in the form!")
      return
    }

    this.payload.name = detail.get('name').value
    this.payload.Email = detail.get('Email').value
    this.payload.PhoneNumber = detail.get('PhoneNumber').value
    this.payload.password = detail.get('password').value
    this.payload.RRR = detail.get('RRR').value

    this.api.signup(this.payload).subscribe(res => {
    alert('SUCCESSFULL') 
    console.log(this.payload); 
    // this.signUpData = { "name": "", "Email": "", "PhoneNumber":"", "password": "", "confirmPassword": "", "RRR":""}
    localStorage.setItem("userData", JSON.stringify(this.payload))
    // window.location.href= "/lo"
    window.location.href = "/app/form"
  })
  }
}
