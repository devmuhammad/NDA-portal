import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  selectedTab: number = 0;

  constructor(private api: ApiService) {}
  
  submit(){
    
  }
  ngOnInit() {
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



