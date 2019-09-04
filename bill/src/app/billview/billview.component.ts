import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { billingModel } from '../billing/billing.model';
import { Router, ActivatedRoute, ParamMap,Params } from '@angular/router';
import { billingService } from '../billing/billing.service';
import { billviewModel } from '../billview/billview.model';
import { billcModel } from '../billc/billc.model';

@Component({
  selector: 'app-billview',
  templateUrl: './billview.component.html',
  styleUrls: ['./billview.component.css']
})
export class BillviewComponent implements OnInit {
  it: billviewModel = new billviewModel();
  item:billingModel[];
  details: billcModel=new billcModel();
  id: any;
  paramsSub: any;
  name:any;
  constructor( private route: ActivatedRoute,
    private router: Router, private billingService: billingService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    
      console.log("gggg",this.id);
      this.billingService.fetchbyidbillbase(this.id).subscribe(data=>{
        console.log("ssssdgd",data)
      
        this.it=data.name;
        console.log("gghytju",data.name)
        this.billingService.fetchbasename(data.name).subscribe(data1=>{
          console.log("rrrrrr",data1)
       this.details=data1.brandname;
       data.name= data1.brandname;
        console.log("sADS Q",data1.brandname);
        // this.it.name=data1.brandname;
        this.it=data;
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
    // this.router.navigate(['/']);
   }
   
}
