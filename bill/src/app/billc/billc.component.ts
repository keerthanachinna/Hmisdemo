import { Component, OnInit,ViewChild, ViewContainerRef  } from '@angular/core';
import { Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { billingModel } from '../billing/billing.model';
import { billingService } from '../billing/billing.service';



@Component({
  selector: 'app-billc',
  templateUrl: './billc.component.html',
  styleUrls: ['./billc.component.css']
})
export class BillcComponent implements OnInit {

  bill: billingModel[];


  constructor(private router: Router, private billingService: billingService) {

  }
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    
    this.billingService.fetchItem()
      .subscribe(data => {

        this.bill = data;
console.log(data);
for(let it of this.bill){
  //console.log("2323",id)
  //var id=it.name;
  console.log("3",it.bname)
  
  this.billingService.fetchbyid(it.bname)
  .subscribe(data1 =>{
     
 
      console.log("efef12",data1);
       it.bname=data1.brandname;
     console.log("name",it.bname)
      // console.log(data1.brandname)
 
     });
   }
   this.bill=data;
   console.log("wwe",data)
     //   console.log("data",this.item)

        var t5 = $("#myTable1").DataTable().destroy();
        $(function () {
          var t5 = $("#myTable1").DataTable({
            'dom': 'Rlfrtip'
          });
        });

      });
  }
}
