import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import{UsersservesService}from '../_services/usersserves.service'
import{user}from'../_interface/user';
import{APiProducts} from '../products';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent {
  apiproducts:APiProducts[]|undefined;
  products:product[];

users:User[]=[];
userserve :UsersService =inject(UsersService)
productserve :ProductService =inject(ProductService);
constructor(){
  this.users=this.userserve.getalluser();
  this.productserve.getproduct().subscribe((data:APiProducts[])=>{ this.apiproducts = data});
this.products= this.productserve.getallproduct();


}

deleteuser(id:number){
  this.userserve.deleteuser(id);
}
