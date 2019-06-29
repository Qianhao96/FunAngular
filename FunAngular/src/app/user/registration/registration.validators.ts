import { AbstractControl, ValidationErrors } from '@angular/forms';

//custome validator stors in different file as where it is used 
export class RegistrationValidators {
    static passwordLength(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).length < 6)
            return {
                passwordLength: {
                    requiredLength: 6,
                    actualLength: control.value.length
                }
            }
    }

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { spaceNotAllowed: 'Username can not contain space' }
    }
}