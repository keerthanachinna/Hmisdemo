import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
// import { DataTables } from './angular/angular-datatables';
import { Injectable } from '@angular/core';
import { itemService } from '../item/item.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { itemModel } from '../item/item.Model';
import { detailsModel} from './details.model';
import{ viewModel} from '../view/view.model';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable()

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // @ViewChild(DataTablesModule) DetailsComponent: DataTablesModule;
  // item:itemModel=new itemModel();
 details: detailsModel=new detailsModel();
 item:itemModel[];
  name:any;
 // id:any
 it: viewModel = new viewModel();

  constructor(private router: Router, private itemService: itemService,private http: HttpClient) {} 

  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.itemService.fetchItem()
    .subscribe(data => {
console.log("1",data);
      this.item = data;
      console.log("2",data)
    
     // data.setHeader('Access-Control-Allow-Origin','*') 
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
  }
var t5 = $("#myTable").DataTable().destroy();
$(function () {
  var t5 = $("#myTable").DataTable({
    'dom': 'Rlfrtip'
  });
});

// });
});

  }

  // view(it)

  // {
  //   console.log("qqw",it)
  //   console.log("sds",it.id)
  //   this.itemService.fetchItemfull(it.id).subscribe(data=>{
  //   console.log("sdsfgh",data)
  //     this.router.navigate(['/view']);
  //   });
  // }
    
    
//  edit(){
//   this.router.navigate(['/item']);
//  }

  
  delete(id){
    
      if(confirm("do you want to delete ?"+id)) {
      // javascript using based on <p id="demo"></p> display var txt;
      //   txt=('demo');
        console.log("Implement delete functionality here");
        this.itemService.deleteitem(id).subscribe(data=>{
        this.ngOnInit();
        alert("Data deleted successfully")
      })
      
      }
     
      else{
        this.router.navigate(['/details']);
      }
    }
      
      
  
   
  }


 
