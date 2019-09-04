
import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailsComponent } from '../details/details.component';
import { itemService } from '../item/item.service';
import{ viewModel} from './view.model';
import { itemModel } from '../item/item.model';
import {detailsModel } from '../details/details.model';
import { switchMap } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap,Params } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  it: viewModel = new viewModel();
  item:itemModel[];
  details: detailsModel=new detailsModel();
  id: any;
  paramsSub: any;
  name:any;
  constructor(private route: ActivatedRoute,
    private router: Router, private itemService: itemService) {
//  this.itemService.fetchItemfull().subscribe(data=>{
//    console.log("hjjgduydg",data)

//  })
   }
  //  this.itemService.fetchItemfull().subscribe
  ngOnInit() {
    // this.route.params
    // (+) converts string 'id' to a number
    // .switchMap((params: Params) => this.itemService.fetchItemfull(+params['it.id']))
    // .subscribe((item) => this.item = item);
    // this.item        Service.fetchItemfull().subscribe
//     this.route.params
//     .switchMap((params: Params) =>this.itemService.fetchItemfull(+params['it.id']).subscribe(data=>{
//   console.log("sfghj",data)
// })

this.route.params.subscribe(params => {
  this.id = params["id"];

  console.log("gggg",this.id);
  this.itemService.fetchItemfull(this.id).subscribe(data=>{
    console.log("ssssdgd",data)
  
    this.it=data.name;
    console.log("gghytju",data.name)
    this.itemService.fetchItemnamebyid(data.name).subscribe(data1=>{
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



// this.item= this.route.paramMap.pipe(
//   switchMap((params: ParamMap) =>
//   this.itemService.fetchItemfull(params.get('id'))
//     // this.service.getHero(params.get('id')))
// );
// this.itemService.fetchItemfull(['it.id']).subscribe(data=>{
//   this.it=data;
//     console.log("sfghj",data)
//   //   this.it=data;
//   })
//     this.itemService.fetchItem().subscribe(data=>{
//       this.item=data;
//       console.log("gwdw",data)
//       // this.item=data.id;
//       // console.log("dsd",data.id);
//       for(let its of this.item){
// // its.id;
// console.log("dtrdt",its.id);
// this.itemService.fetchItemfull(its.id).subscribe(data=>{
// this.it=data;
//   console.log("sfghj",data)
// //   this.it=data;
// })
//       }
//     })
  }
  
  // view(it)

  // {
  //   console.log("qqw",it)
  //   console.log("sds",it.id)
  //   this.itemService.fetchItemfull(it.id).subscribe(data=>{
  //   console.log("sdsfgh",data)
  //     this.router.navigate(['/view',data]);
  //   });
  // }
clear(){
 this.router.navigate(['/details']);
}

}