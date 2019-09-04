import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import {itemService } from '../item/item.service';
import {itemModel } from '../item/item.Model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css']
})
export class NewoneComponent implements OnInit {
 item : itemModel[];
  constructor(private router : Router,private itemService : itemService ) { 

  }

  ngOnInit() {
    this.itemService.fetchItem()
    .subscribe(data =>{
      this.item=data;
      
      console.log(data)
      
  })
    
  
  }
}

