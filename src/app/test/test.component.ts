import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { Students } from '../students';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


 


  students:Students[];
  //stud = new Students();

  isLoadingResults: boolean;
  api: any;
  router: any;
  id : number;
  header: string;
  constructor(public studentservice:StudentService) { }

 

  ngOnInit(): void {
  
    this.getAll();

   

  }


onSubmitt(form:NgForm){

  console.log(form.value);

  this.studentservice.create(form.value).subscribe(data =>{
   
   console.log("data"+ data);


 });
}



deleteStudent(id : number):void
{
  this.studentservice.delete(id).subscribe( data =>{
  });
}



updateStudent(){

  
}

  getAll(): void {
    this.studentservice.getStudentsAll().subscribe(students => this.students = students);
 }

  
 
}
