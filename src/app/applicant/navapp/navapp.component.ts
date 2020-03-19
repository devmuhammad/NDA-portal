import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-navapp',
  templateUrl: './navapp.component.html',
  styleUrls: ['./navapp.component.scss']
})
export class NavappComponent implements OnInit {

  loggedInUser:{}
  constructor() { }


  ngOnInit() {
     this.loggedInUser = JSON.parse(localStorage.getItem("userData"))
     console.log(this.loggedInUser)

  }
}
