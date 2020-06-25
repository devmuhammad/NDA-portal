import { Component, OnInit } from '@angular/core';
import { Util } from "../helpers/utilities";
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {

  months = Util.months

  states = Util.states;

  years = Util.years
  days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  
  lga: { "name": string; "id": number; }[];
  isLinear = false;

  imagePath: any; 
  imgURL: any;
  public message: string;
  selectedFile: File;
  imagePreview: string | ArrayBuffer;
  passport: string;
  

  constructor(private api: ApiService, private data:DataService, private _snackBar: MatSnackBar) {
    this.data.defaultLogo.subscribe( res => this.passport = res)
   }

  ngOnInit() {

    console.log(this.imgURL);
    
  }

 
  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    else{
      this.message = "";
    }

    document.getElementById('click').innerHTML = "";
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      const dataUrl = this.imgURL;
    localStorage.setItem("image", JSON.stringify(this.imgURL))
    }

      // this.selectedFile = event.target.files[0];
      // const reader = new FileReader();
      // reader.onload = () => {
      //   this.imagePreview = reader.result;
      //   this.data.changeLogo(this.imagePreview);
      // };
      
      // reader.readAsDataURL(this.selectedFile);    
    
  }

  personalData = {image: this.imgURL, "lastname": "", "firstname": "", "serviceno": "", "email":"", "presentAddy": "", "permanentAddy": "", "number1": "", "number2": "",
  "POB": "", "DOB": "", "gender": "", "SOG": "", "LGA": "", "city": "", "religion": "", "height": ""}
  
  

  submit(){

    if (this.imagePath == "" ||this.personalData.lastname == "" || this.personalData.firstname == "" || this.personalData.email == "" || this.personalData.presentAddy == "", 
        this.personalData.permanentAddy == "" || this.personalData.number1 == "" || this.personalData.POB == "" || this.personalData.DOB == "" || this.personalData.gender == "",
        this.personalData.SOG == "" || this.personalData.LGA == "" || this.personalData.city == "" || this.personalData.religion == "" || this.personalData.height == ""){
          return
        }
    else{
      this.api.personalDetails(this.personalData).subscribe(res =>{
        localStorage.setItem("personaldetail", JSON.stringify(this.personalData))

        console.log(this.personalData);
      })
    }
}

  selectedState(stateName){
    let state =  this.states;
    this.lga =  state.filter(
      (state) =>  state.state.name == stateName)[0].state.locals;
  }

 

}
