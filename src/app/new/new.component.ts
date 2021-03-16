import { StalinService } from './../stalin.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  // @Input() parentName:string;

parentName: string;
parentAge: number;

 

  constructor(private stalin:StalinService) { }
 
  ngOnInit() {
   
    this.parentAge =this.stalin.getParentAge();
    this.parentName =this.stalin.getParentName();
  }
 
}
