import { Component, OnInit,ViewChild, ViewContainerRef} from '@angular/core';
import { itemModel } from '../item/item.model';
import {  itemService } from '../item/item.service';
import { Router  } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailsComponent } from '../details/details.component';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { detailsModel } from '../details/details.model';
import { saveAs } from 'file-saver';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
login(){
  // this.popup.show
}
}
// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-registation',
//   templateUrl: './registation.component
// .html',
//   styleUrls: ['./registation.component.css']
// })
// e
// xport class RegistationComponent implements OnInit {
   
//  onSubmit(value: any) {
//         console.log(value);
//     }

//   constructor() { }

//   ngOnInit() {
//   }

// }
