import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { CustomValidationServiceService } from '../services/custom-validation-service.service';

@Directive({
  selector: '[appPasswordPattern]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi:true}]
})
export class PasswordPatternDirective implements Validator {

  constructor(private customValidator: CustomValidationServiceService) {}

  validate(control: AbstractControl): {[key: string] : any| null} {
    return this.customValidator.patternValidator()(control);
  }


}
