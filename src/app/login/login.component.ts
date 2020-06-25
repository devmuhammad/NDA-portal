import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any= []
  loginData = {"Email" : "", "password": ""}
  errorpassword: string;
  isAuthenticated: boolean;
  loginRedirect: any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe(res =>{
      this.login = res
      console.log(res);
      
    })

  }

  
  logn() {
    this.loginRedirect();
  }
  logout() {
    this.logout();
  }
  hide = true;



  loginVal(){
    console.log(this.loginData);
    console.log();
    

    if (this.loginData.Email == "" || this.loginData.password == " "){
      alert('Please, input your login details!')
    }

    for (let i = 0; i < this.login.length; i++) {
      if(this.loginData.Email == this.login[i].Email && this.loginData.password == this.login[i].password){
        console.log(this.login[i], "true");
        let loginDet = this.login[i]
        localStorage.setItem("userData", JSON.stringify(loginDet))
        window.location.href = "/app/form"
        return
      }
      else {
      }
    
    }
  this.errorpassword = 'The password is invalid!'
  
  }

}
