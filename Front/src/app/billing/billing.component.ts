import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { billingModel } from './billing.model';
import {  itemService } from '../item/item.service';
import { Router  } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BillcComponent } from '../billc/billc.component';
import {CurrentComponent } from '../current/current.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  @ViewChild('renewalrptForm') myFormData: any;

  billModel: any = { billid:"" ,bname:"",bcode:"",bprice:"",bquantity:"",sale:""};
  // myForm = new FormGroup({
  bill:billingModel=new billingModel();
  id:any;
  name:any;
  nameList:any;
  billiddemo:any;
  billcodedemo:any;
  constructor( private router : Router,private itemService: itemService) { 

    this.itemService.fetchItemnamem()
.subscribe( data=>{
  console.log("namebrand",data)
  this.nameList=data;
  console.log("namebranddemo",data)
});

this.itemService.fetchItem()
.subscribe( data=>{
  console.log("idfectch",data)
  this.billiddemo=data;
  console.log("idfectchdemo",data)
});
this.itemService.fetchItem()
.subscribe( data=>{
  console.log("idfectch",data)
  this.billcodedemo=data;
  console.log("idfectchdemo",data)
});

  }

  ngOnInit() {
  }
  showw(billModel){
    console.log("idfectchdemoidbill",billModel);
  
    if(this.myFormData.invalid)
    {
      alert("enter al details")
     }
     else if(this.myFormData.valid){
      if(confirm("Do u want to submit?"))
      { 
    console.log(billModel);
   // console.log(urlSaveReg);
      this.itemService.saveItemm(billModel)
       .subscribe( data => {
        // console.log(data)
         this.router.navigate(['/billc']);
      //  alert("User created successfully.");
    });
    this.router.navigate(['/bill']);
    alert("User created successfully.");
}
  }
}
cancel(){
  this.myFormData.resetForm();
  
}
onChangename(event) {
  this.nameList.filter(item => item.id == event);
}
onChangenameid(event) {
  this.billiddemo.filter(itemm => itemm.id == event);
}

onChangenamecode(event) {
  this.billcodedemo.filter(itemm => itemm.code == event);
}
}
