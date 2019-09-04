import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-pgae',
  templateUrl: './pgae.component.html',
  styleUrls: ['./pgae.component.css']
})
export class PgaeComponent implements OnInit {
  // ViewChild('renewalrptForm') myFormData: any;

  pgaeModels: any = { id:"" ,name:"",code:"",price:"",quantity:""};
  // item:pgaeModels=new pgaeModels();
  constructor() { }

  ngOnInit() {
  }
// sum(){
//   alert("sgj"+p);
// // console.log("item",item)
//   a=.p+q;
// }
sum(pgaeModels){
  console.log("change",pgaeModels.quantity,"q","p",pgaeModels.price,)
  pgaeModels.Total=parseInt(pgaeModels.quantity ||0 ) * parseInt(pgaeModels.price || 0);
}
}
