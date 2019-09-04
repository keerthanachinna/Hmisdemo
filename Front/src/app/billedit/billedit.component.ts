import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { billingModel } from '../billing/billing.model';
import {  itemService } from '../item/item.service';
import { billviewModel } from '../billview/billview.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailsComponent } from '../details/details.component';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { detailsModel } from '../details/details.model';


import { switchMap } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap,Params } from '@angular/router';
import {viewModel} from '../view/view.model';

@Component({
  selector: 'app-billedit',
  templateUrl: './billedit.component.html',
  styleUrls: ['./billedit.component.css']
})
export class BilleditComponent implements OnInit {

  @ViewChild('renewalrptForm') myFormData: any;

  billingModel: any = { id:"" ,name:"",code:"",price:"",quantity:""};

  bill:billingModel=new billingModel();
  it: billviewModel = new billviewModel();
  id:any;
  nameList:any;
  myfiles :string []=[];
  details: detailsModel=new detailsModel();
did:any;
test:any;

paramsSub: any;

billiddemo:any;
  constructor(private route: ActivatedRoute,private router : Router,private itemService: itemService,private http: HttpClient) {
    this.test={name:""},

    this.itemService.fetchItemname()
.subscribe( data=>{
  this.nameList=data;

  // console.log("hj",data)
  
  
});
this.itemService.fetchItem()
.subscribe( data=>{
  console.log("idfectch",data)
  this.billiddemo=data;
  console.log("idfectchdemo",data)
});


   
   }

  ngOnInit() {
this.route.params.subscribe(params => {
      this.id = params["id"];
    
      console.log("billedit",this.id);
      this.itemService.fetchbyidbillbasem(this.id).subscribe(data=>{
        console.log("after edit",data)
      
        this.billingModel=data;
  
        

      })
    });
  
  }

 
  getFileDetails(event)
{
console.log("exp",event)
console.log("Selected file name Details");
console.log(event.target.files);
this.myfiles.push(event.target.files[0]);
console.log("after assign my files");
console.log("dgfdgf",this.myfiles);


}
editt(billingModel){
  if(this.myFormData.invalid)
  {
    alert("enter al details")
   }
   else if(this.myFormData.valid){
    if(confirm("Do u want to submit?"))
    { 
  console.log(billingModel);
 // console.log(urlSaveReg);
    this.itemService.saveItemm(billingModel)
     .subscribe( data => {
      // console.log(data)
       this.router.navigate(['/billc']);
    //  alert("User created successfully.");
  });
}
   }
  }
onChangename(event) {
  this.nameList.filter(item=> item.id == event);
 
}
onChangenameid(event) {
  this.billiddemo.filter(itemm => itemm.id == event);
}
}
