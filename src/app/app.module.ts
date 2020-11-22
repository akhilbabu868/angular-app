import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavabarComponent } from './navabar/navabar.component';
import { EmployeeComponent } from './employee/employee.component'
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './test/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    DashboardComponent,
    NavabarComponent,
    EmployeeComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
