import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  loggedInDetails = {}
  choicemade = {}
  jambDetail = {}
  passport: string;
  image: any;
  

  constructor(private data: DataService) { 
    this.data.defaultLogo.subscribe( res => this.passport = res)
   }


  ngOnInit() {
    this.jambDetail = JSON.parse(localStorage.getItem("jambno"))
    console.log(this.jambDetail);

    this.choicemade = JSON.parse(localStorage.getItem("choices"))
    console.log(this.choicemade);

    this.loggedInDetails = JSON.parse(localStorage.getItem("personaldetail"))
    console.log(this.loggedInDetails);
    
    this.image = JSON.parse(localStorage.getItem("image"))
    console.log(this.image);
    
  }

  print(){
    let printElement = document.getElementById("printElem");
    let printWindow = window.open();
    printWindow.document.write(document.documentElement.innerHTML);
    // setTimeout(() => { // Needed for large documents
      printWindow.document.body.style.margin = '0 0';
      printWindow.document.body.innerHTML = printElement.outerHTML;
      // printWindow.document.close(); // necessary for IE >= 10
      // printWindow.focus(); // necessary for IE >= 10*/
      printWindow.print();
      setTimeout(() => { // Needed for large documents
        printWindow.close();
      }, 100)
  }
}
// let printElement = document.getElementById("printElem");
//     let printWindow = window.open();
//     printWindow.document.write(document.documentElement.innerHTML);
//     // setTimeout(() => { // Needed for large documents
//       printWindow.document.body.style.margin = '0 0';
//       printWindow.document.body.innerHTML = printElement.outerHTML;
//       // printWindow.document.close(); // necessary for IE >= 10
//       // printWindow.focus(); // necessary for IE >= 10*/
//       printWindow.print();
//       setTimeout(() => { // Needed for large documents
//         printWindow.close();
//       }, 100)
