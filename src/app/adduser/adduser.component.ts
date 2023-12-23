import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

profileForm = this.fb.group({
  firstName: [''],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
  aliases: this.fb.array([
    this.fb.control('')
  ])
});
get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}
addAlias() {
  this.aliases.push(this.fb.control(''));
}
constructor(private fb: FormBuilder) {

 }




 profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })
  alia:new.FormArray([])
});
updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}
}