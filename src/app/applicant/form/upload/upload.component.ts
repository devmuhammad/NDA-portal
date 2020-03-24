import { Component, OnInit, Input } from '@angular/core';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

@Input() mode : string = "indeterminate"
@Input() diameter : number = 20;
@Input() overlay : boolean = true;

isWait = false
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.isWait = true
  }
}
