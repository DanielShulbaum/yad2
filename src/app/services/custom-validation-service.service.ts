import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CustomValidationServiceService {
  patternValidator(): ValidatorFn | any | null {
    return (control: AbstractControl): { [key: string] : any | null } => {
      if (!control.value) {
        return null!;
      }
      // const regex = new RegExp("^(?=.*[0-9])(?=s.*[A-Z])(?=.*[@$!%*#?&-])(.{8,})$");  original
      // const regex = new RegExp("^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{2,}$");
      // const regex = new RegExp("^(?=.*[0-9])(?=s.*[a-z])(.{2,})$");
      // const valid = regex.test(control.value);
      const valid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(control.value);

      return valid ? null!: {InvalidPassword:true};
    };
  }
}
