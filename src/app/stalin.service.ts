import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StalinService {
  private parentName:string;
  private parentAge: number;
  
  constructor() { }

    getParentName():string{
       return this.parentName;
    }

    getParentAge():number{
        return this.parentAge;

    }

    setParentName(name:string):void{
        this.parentName = name;
    }

    setParentAge(age:number):void{
        this.parentAge = age;
    }
}