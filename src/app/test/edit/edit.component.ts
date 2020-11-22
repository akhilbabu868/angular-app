import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  router: any;
  students: any;
 
  editstudent = new FormGroup({

    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('')

  })
  

  constructor(public studentservice:StudentService,private route :ActivatedRoute) { }

  ngOnInit(): void {
    

    this.studentservice.getStudentByID(this.route.snapshot.params.id).subscribe((result)=>{

      console.log("result" +  result);
      console.log("result" +  result['firstname']);

     this.editstudent = new FormGroup({

        firstname: new FormControl(result['firstname']),
        lastname: new FormControl(result['lastname']),
        email: new FormControl(result['email']),
        mobile: new FormControl(result['mobile'])
    
      })
     
  
    })
    
  }


  updateStudentInfo(){
    
    alert("Update");
    
    this.studentservice.updateStudent(this.route.snapshot.params.id,this.editstudent.value).subscribe(data =>{
     
      console.log("data"+data);
  
   });
  }

}
