import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { itemModel } from '../item/item.model';
import {  itemService } from '../item/item.service';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailsComponent } from '../details/details.component';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { detailsModel } from '../details/details.model';
import { saveAs } from 'file-saver';

import { switchMap } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap,Params } from '@angular/router';
import {viewModel} from '../view/view.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('renewalrptForm') myFormData: any;
  item:itemModel=new itemModel();
  it: viewModel = new viewModel();
  id:any;
  nameList:any;
  myfiles :string []=[];
  details: detailsModel=new detailsModel();
did:any;
test:any;
urlpath:any;
  // brandname = Array<brandname>();
  constructor(private route: ActivatedRoute,private router : Router,private itemService: itemService,private http: HttpClient) {
this.test={name:""},

    this.itemService.fetchItemname()
.subscribe( data=>{
  this.nameList=data;

  // console.log("hj",data)
  
  
});
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    
      console.log("gggg",this.id);
      this.itemService.fetchItemfull(this.id).subscribe(data=>{
        console.log("ssssdgd",data)
      
        this.item=data;
      //   console.log("sorry",this.item)
      //   this.itemService.fetchItemnamebyid(data.name).subscribe(data1=>{
      //     console.log("rrrrrr",data1)
      //  this.details=data1.brandname;
       
      //  console.log("bid",this.details);
      // //  this.details=data1.id;
      // //  this.item.id=data1.id;
      // data.name= data1.brandname;
      //   console.log("sADS Q",data1.brandname);
      // //  this.item.name=test;
      //   this.item=data;
      //   console.log("final",data)
      //   })

      })
    });
  } 
  // edit(item) {
  //   console.log("edititem",item)
  //       this.itemService.edititem(item).subscribe(data=>{
        
  //         console.log("edit",data)
  //         this.router.navigate(['/details']);
  //       })
  //     } 
      
      onChangename(event) {
        this.nameList.filter(itemm => itemm.id == event);
             
      }
      getFileDetails(event)
{
  console.log("exp",event)
  console.log("Selected file name Details");
  console.log(event.target.files);
  this.myfiles.push(event.target.files[0]);
  console.log("after assign my files");
  console.log("dgfdgf",this.myfiles);
  
  
}
edit(item){
  if(this.myFormData.invalid)
  {
    alert("enter al details")
   }
   else if(this.myFormData.valid){
    if(confirm("Do u want to submit?"))
    { 
   
  console.log("Insert Files");
  console.log(item);
        this.http.post<any>('http://localhost:2019/item',item)
     .subscribe( data => {
       console.log("user Detsils After Save"); 
       console.log(data);
      //  upload files method call
      const frmData = new FormData();
      console.log("fromdatademo",frmData)
      console.log("iddemoexample",data.id)
     // for (var i = 0; i < this.myfiles.length; i++) {
          frmData.append("file", this.myfiles[0]);
     // }
     console.log("frm dsta");
     console.log(frmData);
     
      this.http.post<any>('http://localhost:2019/uploadFile/'+data.id,frmData).subscribe(
          data => {
            console.log("After Save User And Url ");
            console.log(data);
              if (this.myfiles.length > -1) {
                  for (let index = 0; index <= this.myfiles.length; index++) {
                      this.myfiles.pop();

                  }
              }
            });
          
            this.router.navigate(['/details']);
          });
      }
      else{
        this.router.navigate(['/edit:']);
      }
    }
  }

}
