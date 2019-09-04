import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-checkvalidation',
  templateUrl: './checkvalidation.component.html',
  styleUrls: ['./checkvalidation.component.css']
})
export class CheckvalidationComponent implements OnInit {
  @ViewChild('renewalrptForm') myFormData: any;
  constructor() { }

  ngOnInit() {
  }

}
