import { Component, OnInit,ViewChild, ViewContainerRef  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailsComponent } from '../details/details.component';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { billingModel } from '../billing/billing.model';
import { Router, ActivatedRoute, ParamMap,Params } from '@angular/router';
import {  itemService } from '../item/item.service';
import { billviewModel } from '../billview/billview.model';
import { billcModel } from '../billc/billc.model';

import { itemModel } from '../item/item.model';
import {detailsModel } from '../details/details.model';



@Component({
  selector: 'app-billview',
  templateUrl: './billview.component.html',
  styleUrls: ['./billview.component.css']
})
export class BillviewComponent implements OnInit {
  itt: billviewModel = new billviewModel();
  bill:billingModel[];
  details: billcModel=new billcModel();
  id: any;
 
  paramsSub: any;
  namee:any;
  constructor( private route: ActivatedRoute,
    private router: Router, private itemService: itemService) {

 
     }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    
      console.log("gggg",this.id);
      this.itemService.fetchbyidbillbasem(this.id).subscribe(data=>{
        console.log("ssssdgd",data)
      
        this.itt=data.name;
        console.log("gghytju",data.name)
        this.itemService.fetchbasename(data.name).subscribe(data1=>{
          console.log("rrrrrr",data1)
       this.details=data1.brandname;
       data.name= data1.brandname;
        console.log("sADS Q",data1.brandname);
        // this.it.name=data1.brandname;
        this.itt=data;
        })
      
    //     this.itemService.fetchItemnamebyid(it.name)
    //  .subscribe(data1 =>{
    //     console.log(data1)
    
    //      console.log("efef12",data1);
    //       // it.name=data1.brandname;
    //     var d=data1.brandname;
    //     console.log("dsssss",d)
    //      console.log("bnbn",data1.brandname)
    
    //     });
      })
    });
    
  }
  clear(){
    this.router.navigate(['/billc']);
   }
   
}
