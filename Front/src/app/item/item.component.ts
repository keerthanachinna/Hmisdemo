import { Component, OnInit,ViewChild, ViewContainerRef} from '@angular/core';
import { itemModel } from './item.model';
import {  itemService } from './item.service';
import { Router  } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailsComponent } from '../details/details.component';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { detailsModel } from '../details/details.model';
import { saveAs } from 'file-saver';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  // @ViewChild(DataTable) dataTableComponent: DataTable;




  @ViewChild('renewalrptForm') myFormData: any;

  itemModel: any = { id:"" ,name:"",code:"",price:"",quantity:""};

  
  // myForm = new FormGroup({
  //   name: new FormControl('name', Validators.required),
  //   code: new FormControl('code', Validators.required),
  //   price: new FormControl('price', Validators.required),
  //   quantity: new FormControl('quantity', Validators.required),
  // });
  item:itemModel=new itemModel();
  
  id:any;
  name:any;
  nameList:any;
  details:detailsModel=new detailsModel();

   fa:any;
   myfiles :string []=[];

selectfile:File=null;
registerForm: FormGroup;
submitted = false;
  
file1:ConstantSourceOptions;
  constructor(private router : Router,private itemService: itemService,private http: HttpClient) { 
   // this.resss=false;
    // con.setRequestProperty("Content-Type", "application/json; charset=utf8")
this.itemService.fetchItemname()
.subscribe( data=>{
  this.nameList=data;

  console.log("guyguy",data)
  
  
});


  }
  ngOnInit() {
    
  //   this.registerForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     price: ['', Validators.required,,Validators.pattern],
  //     quantity: ['', [Validators.required, ,Validators.pattern]],
  //     code: ['', [Validators.required ,Validators.pattern]],
     
  // })
  }
  
//   get f() { return this.registerForm.controls; }
//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }

//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
// }

  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.item));
  // }
  sum(itemModel){
    console.log("change",itemModel.quantity,"q","p",itemModel.price,)
    itemModel.Total=parseInt(itemModel.quantity ||0 ) * parseInt(itemModel.price || 0);
  }
  show(itemModel){
    if(this.myFormData.invalid)
    {
      alert("enter al details")
     }
    // console.log("demo1")
    else if(this.myFormData.valid){
      // console.log("itemModel",this.itemModel)
     console.log("Insert Files");
    console.log(itemModel);
    if(confirm("Do u want to submit?"))
              { 
               
    // if (this.itemModel.Validators) {
    //   this.router.navigate(['/item']); 
    //   alert("enter al value");
    // }
    // console.log("Insert Files");
    // console.log(itemModel);
    
    // if(itemModel.name=="" || itemModel.price=="" || itemModel.quantity=="" ||itemModel.code==""){
    
    //   alert("Fill all the filed in the from")

  
    
//    this.registerForm = this.formBuilder.group({
//     firstName: ['', Validators.required],
//     lastName: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(6)]],
//     confirmPassword: ['', Validators.required]
// }
    // }

          this.http.post<any>('http://localhost:2019/item',itemModel)
       .subscribe( data => {
         console.log("user Detsils After Save"); 
         console.log("dfhgsfd",data);
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
              alert("From enter successfully")
            
             this.router.navigate(['/details']);
            });
            // alert("From enter successfully")
        }
      }
    }
   cancel(){
    this.router.navigate(['/item']);
       
    
      }

onChangename(event) {
  this.nameList.filter(item=> item.id == event);
 
}





getFileDetails(event)
{
  console.log("exp",event)
  console.log("Selected file name Details");
  console.log(event.target.files);
  this.myfiles.push(event.target.files[0]);
  console.log("after assign my files");
  console.log(this.myfiles);
  
  
}

}





