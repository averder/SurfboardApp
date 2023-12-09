import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  validateInputNumber(event: any, field: FormControl) {
    const inputValue = event.target.value.replace(/[^0-9]/g, '');
    field.setValue(inputValue);
  }

  hasFieldError(control: FormControl, fieldName: string): boolean {
    return control.invalid ?? false;
  }

  getErrorMessage(control: FormControl, fieldName: string): string {
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }

    if (control?.hasError('pattern')) {
      return `Not a valid ${fieldName}`;
    }

    if (control?.hasError('requiredTrue')) {
      return `An option must be selected ${fieldName}`;
    }
    return '';
  }
}
