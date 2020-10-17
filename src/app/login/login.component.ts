import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  employeDetail=[];
  constructor(private employeService :EmployeeService ) { }

  ngOnInit(): void {

    //console.log("data"+this.employeService.employeList)
    this.employeDetail = this.employeService.employeList;

  }

 

}
