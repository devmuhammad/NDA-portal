import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { NgForOf } from '@angular/common';
import { Util } from "../helpers/utilities";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  
  selectedTab: number = 0;

  ngOnInit(): void {
  }

  switchTab(value){
    if(value == 'instruction'){
      this.selectedTab = 1
    }
  
    else if(value == 'info'){
      this.selectedTab = 2
    }
    else if(value == 'qualification'){
      this.selectedTab = 3
    }
    else if(value == 'upload'){
      this.selectedTab = 4
    }
  }
}
 

