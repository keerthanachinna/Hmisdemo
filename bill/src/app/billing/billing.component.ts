import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { billingModel } from './billing.model';
import { billingService } from './billing.service';
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

  bill:billingModel=new billingModel();
  id:any;
  name:any;
  nameList:any;
  constructor( private router : Router,private billingService: billingService) { 

    this.billingService.fetchItemname()
.subscribe( data=>{
  console.log(data)
  this.nameList=data;
});
  }

  ngOnInit() {
  }
  show(bill){
    console.log(bill);
   // console.log(urlSaveReg);
      this.billingService.saveItem(bill)
       .subscribe( data => {
        // console.log(data)
         this.router.navigate(['/billc']);
      //  alert("User created successfully.");
    });
}

onChangename(event) {
  this.nameList.filter(item => item.id == event);
}

}
