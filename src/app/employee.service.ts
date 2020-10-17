import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employeList =[
    {id:1,name:"akhil"},
    {id:2,name:"arun"},
    {id:3,name:"sony"},
   ]
  

  constructor() { }
}
