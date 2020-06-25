import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { ApiService } from "../api.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  Users = [];
  emailError = ''
  paymentName:any = []

  signUpData = { "name": "", "Email": "", "PhoneNumber":"", "password": "", "confirmPassword": "", "RRR": ""}
  payload = { "name": "", "Email" : "", "PhoneNumber": "", "password": "", "RRR": ""}
  errorMsg: string;
  errorRRR: string;

  rrrcode = {}

  currentEvent: any = {id: null, name: '', description: '', date: new Date()};

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getRRR();
    
    this.rrrcode = JSON.parse(localStorage.getItem("rrr"))
    console.log(this.rrrcode);
    
  }

  checkPasswordMatch() {
    if (this.signUpData.password !== this.signUpData.confirmPassword){
      this.errorMsg = "Password does not match"
      this.signUpData.confirmPassword = ""
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
    for( var i = 0; i < this.paymentName.length; i++ ){
      if(this.signUpData.Email == this.paymentName[i].email  && this.signUpData.RRR == this.paymentName[i].RRR){
        console.log(this.paymentName[i], "fyu");   
        this.errorRRR=""
        return        
      }
      else {
        console.log("Not found");
        console.log(this.signUpData);
      }
    }
    this.errorRRR = "The RRR does not match this User!"
    this.signUpData.RRR = ''
  }

  signUp(){
   
    if(this.signUpData.name == "" || this.signUpData.Email == "" || this.signUpData.PhoneNumber == "" || this.signUpData.password == "" || 
    this.signUpData.confirmPassword == "" || this.signUpData.RRR == ""){
      alert("Please, fill in the form!")
      return
    }

    this.payload.name = this.signUpData.name
    this.payload.Email = this. signUpData.Email
    this.payload.PhoneNumber = this.signUpData.PhoneNumber
    this.payload.password = this.signUpData.password
    this.payload.RRR = this.signUpData.RRR

    this.api.signup(this.payload).subscribe(res => {
    alert('SUCCESSFULL') 
    console.log(this.payload); 
    this.signUpData = { "name": "", "Email": "", "PhoneNumber":"", "password": "", "confirmPassword": "", "RRR":""}
    localStorage.setItem("userData", JSON.stringify(this.payload))
    // window.location.href= "/lo"
    window.location.href = "/app/form"
  })
  }
}
