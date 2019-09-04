import { Component, OnInit } from '@angular/core';
import { regModel } from './reg.model';
import { regService } from './reg.service';
import { Router  } from '@angular/router';
// import { ViewChild, ViewContainerRef } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
// import { HttpClient, HttpParams } from '@angular/common/http'


// import 'rxjs/add/operator/map';

@Injectable({
  providedIn:'root',
})

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
   reg:regModel=new regModel();

  constructor(private router : Router,private regService: regService) {
    // console.log('Hello ProductProvider Provider');
   }

  ngOnInit() {
    // console.log(regService.saveReg(reg))
  }

show(reg){
  console.log(reg);
  // console.log(urlSaveReg);
    this.regService.saveReg(reg)
     .subscribe( data => {
     alert("User created successfully.");
  });
  // this.userService.saveUser(user)

}
}
      
  
 


