import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Students } from './students';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class StudentService {


 students:Students[];

  private apiServer = "http://localhost:8025";
  constructor(private httpClient: HttpClient) { }

 
  create(stud :Students) {
     
    const headers = { 'content-type': 'application/json'}  
     const body=JSON.stringify(stud);
     console.log('student----'+body)
    return this.httpClient.post(this.apiServer + '/savestudent', body,{'headers':headers});
    
  }


 
  delete(id :number){
   
    console.log("id"+id)
    return this.httpClient.delete<Students>(this.apiServer + '/deletestudent/' + id,)
    .pipe(
      catchError(this.errorHandler)
    )
  }

 
  getStudentByID(id : number){

    return this.httpClient.get<Students>(this.apiServer + '/student/edit/' + id,)
  }


  updateStudent(id ,data){

    return this.httpClient.put(this.apiServer + '/Updatestudent' + id,data)
  }


  getStudentsAll(): Observable<Students[]> {
    return this.httpClient.get<Students[]>(this.apiServer +"/studentdetail" )
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(errorHandler: any): import("rxjs").OperatorFunction<Students[], any> {
    throw new Error('Method not implemented.');
  }




}
