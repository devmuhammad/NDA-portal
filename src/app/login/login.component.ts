import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormsModule, FormBuilder, FormGroup } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any= []
  errorpassword: string;
  isAuthenticated: boolean;
  loginRedirect: any;

  loginDetail: FormGroup;

  constructor(private api:ApiService, private fb: FormBuilder) { }

  ngOnInit() {

    this.loginDetail = this.fb.group({
      'Email': [''],
      'password': [''],
    })

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
    console.log(this.loginDetail);
    console.log();

    let data = this.loginDetail
    

    if (data.get('Email').value == "" || data.get('password').value == " "){
      alert('Please, input your login details!')
      return
    }

    for (let i = 0; i < this.login.length; i++) {
      if(data.get('Email').value == this.login[i].Email && data.get('password').value == this.login[i].password){
        console.log(this.login[i], "true");
        let loginDet = this.login[i]
        localStorage.setItem("userData", JSON.stringify(loginDet))
        window.location.href = "/app/form"
      }
      else {
       
      }
      this.errorpassword = 'The Username or Password is incorrect'
      data.get('password').setValue == null
    }
  
  }

}
