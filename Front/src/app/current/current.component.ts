import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import {  itemService } from '../item/item.service';
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
item: currentModel[]; 
id:any;
nameList:any;
bill: billingModel[];
billc:billcModel[];
  constructor(private router: Router, private itemService: itemService) { 
   this.id={id:""}
   this.itemService.fetchItemname()
   .subscribe( data=>{
     console.log("sssdert",data)
     this.billc=data;
     console.log("sssderf",data);
     this.nameList=data;
     console.log("q e e ",data);
    // this.billc=data.brandname;
    // console.log("hgwyte",data.id)

   });
  }

  ngOnInit() {
    
  }
  current(id){
    this.itemService.fetchItemnamesearch(id)
    .subscribe( data => {
     console.log("demo",data)

  this.item = data;
  this.itemService.fetchItemname()
   .subscribe( data=>{
     console.log("sssdert",data)
     this.billc=data;
     console.log("sssderf",data);
     this.nameList=data;
     console.log("q e e ",data);
    // this.billc=data.brandname;
    // console.log("hgwyte",data.id)

   });
   this.item=data;
    });
  }
  currentname(name){
    console.log("w",name)
    this.itemService.fetchItemnamesearch(name)
    .subscribe( data => {
     console.log("demo",data)

  this.item = data;
  for(let it of this.item){
    //console.log("2323",id)
    //var id=it.name;
    console.log("3",it.name)
    var id=it.id;
    console.log("weqweqwe",id)
    this.itemService.fetchItemnamebyid(it.name)
    .subscribe(data1 =>{
       
   
        console.log("efef12",data1);
         it.name=data1.brandname;
       var d=data1.brandname;
       console.log("dsssss",d)
        console.log("bnbn",data1.brandname)
   
       });
       this.item=data;
     }
  
//   console.log("gghytju",data.name)
//   this.itemService.fetchItemnamebyid(data.name).subscribe(data1=>{
//     console.log("rrrrrr",data1)
//  this.billc=data1.brandname;
//  data.name= data1.brandname;
//   console.log("sADS Q",data1.brandname);

//     });
//     this.item=data;
  });
}
  onChangename(event) {
    this.nameList.filter(item => item.id == event);
  }






}
 
