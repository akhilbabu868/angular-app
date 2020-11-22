import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NavabarComponent } from './navabar/navabar.component';
import { EditComponent } from './test/edit/edit.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'dashboard', component: NavabarComponent },
  { path: 'master', component: TestComponent },
  { path: 'master/student/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
