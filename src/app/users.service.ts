import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

getalluser():User[]{

  return this.users;
}
usercount(){
  return this .users.length;
}

private users:User[] = [
  {
  id:1,
  password:"derr54",
  name:"safaa",
age:5,
username:"saerserftf",
  }, 
  {
    id:2,
    password:"derr54",
    name:"miuyg",
  age:6,
  username:"erftf",
    }, 
]
// get user by id


  }

  