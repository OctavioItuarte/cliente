import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';


export const comparePasswordValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const pwd = control.get('password');
  const r_pwd = control.get('r_pwd');
  return pwd && r_pwd && pwd.value !== r_pwd.value ? {comparePassword: true} : null;
};


@Directive({
  selector: '[appComparePassword]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: ComparePasswordDirective, multi: true},
  ],
})


export class ComparePasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return comparePasswordValidator(control);
  }
}
