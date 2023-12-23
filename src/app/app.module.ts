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

@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    AdduserComponent,
    ErrorComponent,
    ViewComponent,
    ViewuserComponent,
    EdituserComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormBuilder,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
