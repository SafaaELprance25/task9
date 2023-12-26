import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ErrorComponent } from './error/error.component';
import { ViewComponent } from './view/view.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AddemploerComponent } from './addemployer/addemploer.component';
import { EditemployerComponent } from './editemployer/editemployer.component';
import { ViewemployerComponent } from './viewemployer/viewemployer.component';
import { DeleteemployerComponent } from './deleteemployer/deleteemployer.component';
import { UpdatemployerComponent } from './updatemployer/updatemployer.component';

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    AdduserComponent,
    ErrorComponent,
    ViewComponent,
    ViewuserComponent,
    EdituserComponent,
    ProfileEditorComponent,
    AddemploerComponent,
    EditemployerComponent,
    ViewemployerComponent,
    DeleteemployerComponent,
    UpdatemployerComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,

    RouterModule,
    FormBuilder,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
