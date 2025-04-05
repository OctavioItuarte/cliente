import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { SignupService } from '../../services/signup/signup.service';
import { User } from '../../models/user';
import { Business } from '../../models/business';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  checkedSignup: string ="";

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
