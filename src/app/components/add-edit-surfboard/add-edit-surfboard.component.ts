import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-add-edit-surfboard',
  templateUrl: './add-edit-surfboard.component.html',
  styleUrls: ['./add-edit-surfboard.component.css'],
})
export class AddEditSurfboardComponent implements OnInit {
  addOrEditTitle: string = 'Edit';
  soldStatus: string = 'before';
  usedStatus: string = 'no';
  form: FormGroup;

  @ViewChild('submitButton') submitButton: any;

  selectedImage: string | undefined =
    'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor(
    private imageUploadService: ImageUploadService,
    private fb: FormBuilder,
    private validationService: ValidationService
  ) {
    this.form = this.fb.group({
      image: [''],
      name: ['', Validators.required],
      size: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      weight: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      amount: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      linkSocialMedia: ['', Validators.required],
      price: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      description: ['', Validators.required],
      type: ['', Validators.required],
      sold: ['', Validators.required, this.atLeastOneSelectedValidator()],
      used: ['', Validators.required, this.atLeastOneSelectedValidator()],
    });
  }

  atLeastOneSelectedValidator() {
    return (control: { value: string[] }) => {
      const selectedOptions = control.value;
      return selectedOptions && selectedOptions.length > 0
        ? null
        : { atLeastOneSelected: true };
    };
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.updateSubmitButtonState();
    });
  }

  updateSubmitButtonState() {
    const isFormInvalid = this.form.invalid;
    const isButtonDisabled = this.submitButton?.disabled;

    if (isFormInvalid !== isButtonDisabled) {
      this.submitButton.disabled = isFormInvalid;
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.uploadImage(file);
  }

  uploadImage(file: File): void {
    this.imageUploadService.uploadImage(file).subscribe(
      (localImageUrl) => {
        this.selectedImage = localImageUrl;
        console.log('Image successfully loaded locally', localImageUrl);
      },
      (error) => {
        console.error('Error loading the image', error);
      }
    );
  }

  selectedImagePreview(): string | null {
    return this.selectedImage || null;
  }

  addSurfboard() {
    console.log('add surfboard');
  }

  validateInputNumber($event: any, field: string) {
    let control = this.form.get(field);
    if (control != null && control instanceof FormControl) {
      this.validationService.validateInputNumber($event, control);
    }
  }

  hasFieldError(fieldName: string): boolean {
    let control = this.form.get(fieldName);
    if (control != null && control instanceof FormControl) {
      return this.validationService.hasFieldError(control, fieldName);
    }
    return false;
  }

  getErrorMessage(fieldName: string) {
    let control = this.form.get(fieldName);
    if (control != null && control instanceof FormControl) {
      return this.validationService.getErrorMessage(control, fieldName);
    }
    return '';
  }
}
