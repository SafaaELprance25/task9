import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [

  {
    path: '',
    component: ListusersComponent,
    title: 'Home page'
  },



  {
    path: 'add',
    component: AdduserComponent,
    title: 'Home details'
  },


  {
    path: '**',
    component:ErrorComponent ,
    title: 'Error details'
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
