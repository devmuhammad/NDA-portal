import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saveprint',
  templateUrl: './saveprint.component.html',
  styleUrls: ['./saveprint.component.scss']
})
export class SaveprintComponent implements OnInit {

  loggedInDetails = {}
  choicemade = {}
  jambDetail = {}
  
  constructor() { }

  ngOnInit() {
    this.choicemade = JSON.parse(localStorage.getItem("choices"))
    console.log(this.choicemade);

    this.loggedInDetails = JSON.parse(localStorage.getItem("personaldetail"))
    console.log(this.loggedInDetails);
    
    this.jambDetail = JSON.parse(localStorage.getItem("jambno"))
    console.log(this.jambDetail);

    window.print();
  }

}
