import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.scss']
})
export class UserCreatePageComponent implements OnInit {


  username:FormControl = new FormControl('ali',Validators.required); // tek bir nesnenin form ile kontrolü

  userCreate:FormGroup = this.fb.group({
    name:['', Validators.required],
    email:['',[Validators.email,Validators.required]]
  });

  // FormBuilder ile form group form controll bide form Array gibi farklı form nesneleri oluşturabilmemizi sağlayan bir servis
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSetValue(){
    this.username.setValue('can');
  }

  onGetValue(){
    alert(this.username.value);
  }

  onSubmit(){
    console.log('form-value', this.userCreate.value);

    if(this.userCreate.valid){
      // api ye istek atabiliriz
    }
  }

  onEmailSet(){
    this.userCreate.get('email')?.setValue('test@test.com');
  }

  onNameGet(){
    alert(this.userCreate.get('name')?.value);
  }

  onPatchValue(){
    this.userCreate.patchValue({
      name:'ali',
      email:'ali@test.com'
    })
  }

  onReset(){
    this.userCreate.reset();
  }

}
