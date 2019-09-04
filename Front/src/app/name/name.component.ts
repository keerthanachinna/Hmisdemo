import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { Router  } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { nameModel } from './name.model';
import { itemService } from '../item/item.service';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  brand:nameModel=new nameModel();
  constructor(private router : Router,private itemService: itemService) { }

  ngOnInit() {
  }
  shows(brand){
    console.log(brand);
   // console.log(urlSaveReg);
      this.itemService.saveItemname(brand)
       .subscribe( data => {
        // console.log(data)
         //this.router.navigate(['/details']);
       alert("added brand name successfully.");
    });
}
PrintElem(elem)
    {
        this.Popup($('<div/>').append($(elem).clone()).html());
    }
   Popup(data) 
    {
        var mywindow = window.open('', 'my div', 'height=400,width=600');
 
        mywindow.document.write('<link rel="stylesheet" href="assets/css/n.css" type="text/css" />');
        mywindow.document.write('<a><img src="assets/logo.png" class="img-rounded" style="height: 100px;"></a>');
        // mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        // mywindow.document.write('</body></html>')
       
        // mywindow.document.write(data);
        // setTimeout( );
       setTimeout(() => {
        mywindow.print();
        mywindow.close();
        // if (mywindow.confirm('mywindow.document.write(data)')) {
        // // va  txt = "You pressed OK!";
        // mywindow.print();
        
        // } else {
        //   // txt = "You pressed Cancel!";
        //   mywindow.close();
        // }

       },100 );
        // mywindow.document.write(data);
      //  
        return true;
    }
    goprint()
  {
    // this.loader.showLoading(false);
    var self=this;
    //setTimeout(function(){
      // self.loader.showLoading(false);
      window.print();

    //},2000)
  }
    
}
