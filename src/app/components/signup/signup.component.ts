import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormArray, AbstractControl } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { SignupService } from '../../services/signup/signup.service';
import { comparePasswordValidator } from '../../directives/comparepassword/compare-password.directive';
import { User } from '../../models/user';
import { Business } from '../../models/business';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit{
  
  constructor(private signupService: SignupService){}

  ngOnInit(){
    this.signUpForm.valueChanges.subscribe(()=>this.clearMessages());
    this.signUpForm.get('selectedUser')?.valueChanges.subscribe(type => {
      this.toggleUserTypeFields(type);
    });
  }

  signUpForm = new FormGroup<{ [key: string]: AbstractControl }>({

    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),

    ]),
    r_pwd: new FormControl('',[
      Validators.required,
      
    ]),
    
    selectedUser: new FormControl('',[Validators.required]),

    clientData: new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      birthdate: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required])
    }),

    businessData: new FormGroup({
      nameBusiness: new FormControl('',[Validators.required]),
      cuit: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required])
    })
  },

  { validators: comparePasswordValidator });


  toggleUserTypeFields(type: string) {
    const clientGroup = this.signUpForm.get('clientData') as FormGroup;
    const businessGroup = this.signUpForm.get('businessData') as FormGroup;

    if (type === 'clientData') {
      // Activar validadores en clientData
      Object.keys(clientGroup.controls).forEach(field => {
        const control = clientGroup.get(field);
        control?.setValidators(Validators.required);
        control?.updateValueAndValidity();
      });

      // Desactivar validadores en businessData
      Object.keys(businessGroup.controls).forEach(field => {
        const control = businessGroup.get(field);
        control?.clearValidators();
        control?.updateValueAndValidity();
      });
    } else if (type === 'businessData') {
      // Activar validadores en businessData
      Object.keys(businessGroup.controls).forEach(field => {
        const control = businessGroup.get(field);
        control?.setValidators(Validators.required);
        control?.updateValueAndValidity();
      });

      // Desactivar validadores en clientData
      Object.keys(clientGroup.controls).forEach(field => {
        const control = clientGroup.get(field);
        control?.clearValidators();
        control?.updateValueAndValidity();
      });
    }
  }

  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get r_pwd() {
    return this.signUpForm.get('r_pwd');
  }
  get firstName() {
    return this.signUpForm.controls['clientData'].get('firstName');
  }
  get lastName() {
    return this.signUpForm.controls['clientData'].get('lastName');
  }
  get phoneNumberClient() {
    return this.signUpForm.controls['clientData'].get('phoneNumber');
  }
  get phoneNumberBusiness() {
    return this.signUpForm.controls['businessData'].get('phoneNumber');
  }
  get address() {
    return this.signUpForm.controls['businessData'].get('address');
  }
  get birthdate() {
    return this.signUpForm.controls['clientData'].get('birthdate');
  }
  get nameBusiness() {
    return this.signUpForm.controls['businessData'].get('nameBusiness');
  }
  get cuit() {
    return this.signUpForm.controls['businessData'].get('cuit');
  }
  get category() {
    return this.signUpForm.controls['businessData'].get('category');
  }
  get selectedUser(){
    return this.signUpForm.get('selectedUser');
  }

  errorMessage: string | null = null;
  successMessage: string | null = null;
  
  clearMessages(){
    this.errorMessage=null;
    this.successMessage=null;
  }

  signupUser(){
    
    if(this.selectedUser?.value==="clientData"){
      let user_data:User = {email:this.email?.value, name:{firstName:this.firstName?.value, lastName:this.lastName?.value}, birthdate:this.birthdate?.value, phoneNumber:this.phoneNumberClient?.value, registration_date:new Date()};

      this.signupService.signup('signup/client', {password:this.password?.value, ...user_data}).subscribe({
        next: (res) => {
          this.signUpForm.reset();
          this.successMessage = '¡Registro exitoso! Ya puedes iniciar sesión.';
          this.errorMessage = null;
          console.log('Registro exitoso', res);
          
        },
        error: (err) => {
          console.error('Error en el registro:', err.message);
          this.errorMessage = err.message; // Mostrar en la vista
          this.successMessage = null;
        }
      });
    }
    else if(this.selectedUser?.value==="businessData"){
      let user_data:Business = {email:this.email?.value, nameBusiness:this.nameBusiness?.value, cuit:this.cuit?.value, phoneNumber:this.phoneNumberBusiness?.value, address:this.address?.value, category:this.category?.value, registration_date:new Date()};
      
      this.signupService.signup('signup/business', {password:this.password?.value, ...user_data}).subscribe({
        next: (res) => {
          this.signUpForm.reset();
          this.successMessage = '¡Registro exitoso! Ya puedes iniciar sesión.';
          this.errorMessage = null;
          console.log('Registro exitoso', res);
        },
        error: (err) => {
          console.error('Error en el registro:', err.message);
          this.errorMessage = err.message; // Mostrar en la vista
          this.successMessage = null;
        }
      });
    }
  }

}