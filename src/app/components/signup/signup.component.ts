import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { SignupService } from '../../services/signup/signup.service';
import { User } from '../../models/user';
import { Business } from '../../models/business';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
/*
  user_form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl('', [Validators.required] ),
    repeated_pwd: new FormControl('', [Validators.required] )
  });*/

  checkedSignup: string ="";

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl([
      Validators.required,
      
    ]),
    pwd: new FormControl([
      Validators.required,
      
    ]),
    r_pwd: new FormControl([
      Validators.required,

    ]),
    user: new FormGroup({
      client: new FormControl([
        Validators.required,
      ]),
      business: new FormControl([
        Validators.required,
      ])
    },
      
    ),

  });

  constructor(private signupService: SignupService){ }

  email:string="";
  password:string="";
  repeated_pwd:string="";

  user_data={
    email:"",
    password:"",
    name:{
      firstName:"",
      lastName:""
    },
    birthdate:new Date,
    phoneNumber:""
  };
  business_data={
    email:"",
    password:"",
    name:"",
    phoneNumber:"",
    cuit:"",
    address:"",
    category:""
  }
  
  

  signupUser(){
    this.user_data.email=this.email;
    this.user_data.password=this.password;

    this.signupService.signup('signup/client', this.user_data).subscribe(response=>console.log(response))
  }

  signupBusiness(){
    this.business_data.email=this.email;
    this.business_data.password=this.password;
    this.signupService.signup('signup/business', this.business_data).subscribe(response=>console.log(response))
  }

}
