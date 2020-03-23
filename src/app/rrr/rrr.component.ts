import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-rrr',
  templateUrl: './rrr.component.html',
  styleUrls: ['./rrr.component.scss']
})
export class RrrComponent implements OnInit {

  purchaseData = {'name': "", "email": "", "confirmEmail": "", "number": ""}
  load = {"name" : "", "email": "", "RRR": ""}
  errorMsg: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }
 
  checkEmailMatch() {
    if (this.purchaseData.email !== this.purchaseData.confirmEmail){
      this.errorMsg = "Email does not match"
      this.purchaseData.confirmEmail = ""
    }
    else {
      this.errorMsg = ""
    }
      
  }

  pinPurchase(){

    if(this.purchaseData.name == "" || this.purchaseData.email == "" || this.purchaseData.number == "" || this.purchaseData.confirmEmail == ""){
        alert("Please, fill in the form!")
        return
    }

    let arr = (Math.floor(Math.random() * 1000000000000000).toString())
    
    console.log(arr)

    this.load.name = this.purchaseData.name
    this.load.email = this.purchaseData.email
    this.load.RRR = arr

    this.api.purchase(this.load).subscribe(res => {
    console.log(this.load); 
    alert('SUCCESSFULL : Your rrr code is :' + arr) 
    this.purchaseData = { "name": "", "email": "", "confirmEmail": "", "number":"",}
    localStorage.setItem("rrr", JSON.stringify(this.load))
    window.location.href = "/signup"
    })

    

  }

}
