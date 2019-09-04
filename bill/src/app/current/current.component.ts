import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { billingService } from '../billing/billing.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {currentModel } from './current.model';
import {billingModel } from '../billing/billing.model';
import { billcModel } from '../billc/billc.model';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
// var id:any
item: currentModel = new currentModel();
id:any;
nameList:any;
bill: billingModel[];
billc:billcModel[];
  constructor(private router: Router, private billingService: billingService) { 
   this.id={id:""}
   this.billingService.fetchItemname()
   .subscribe( data=>{
     console.log("sssdert",data)
     this.billc=data;
     this.nameList=data;
    // this.billc=data.brandname;
    // console.log("hgwyte",data.id)

   });
  }

  ngOnInit() {
    
  }
  current(id){
    this.billingService.fetch(id)
    .subscribe( data => {
     console.log("demo",data)

  this.item = data;

    });
  }
  currentname(name){
    
    this.billingService.fetchbasename(name.id)
    .subscribe( data => {
     console.log("demo",data)

  this.item = data;
console
    });
  }
  onChangename(event) {
    this.nameList.filter(item => item.id == event);
  }


}
 
