import { StalinService} from './stalin.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datapass';
  name:string;
  age:number;
  // childName:string;
  

  constructor(private stalin:StalinService,private router:Router){

  }
  
 onChild2ButtonClicked():void{
  
   this.stalin.setParentAge(this.age);
   this.stalin.setParentName(this.name);
   this.router.navigateByUrl('new')

 }
}
