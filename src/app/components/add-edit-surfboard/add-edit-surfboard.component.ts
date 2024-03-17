import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Surfboard } from 'src/app/Interfaces/surfboard';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { SurfboardService } from 'src/app/services/surfboard.service';
import { ValidationService } from 'src/app/services/validation.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-surfboard',
  templateUrl: './add-edit-surfboard.component.html',
  styleUrls: ['./add-edit-surfboard.component.css'],
})
export class AddEditSurfboardComponent implements OnInit {
  addOrEditTitle: string = 'Edit';
  form: FormGroup;

  @ViewChild('submitButton') submitButton: any;

  selectedImage: string | undefined =
    'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor(
    private _surfboardService: SurfboardService,
    private _messageService: MessageService,
    private imageUploadService: ImageUploadService,
    private fb: FormBuilder,
    private validationService: ValidationService,
    private router: Router
  ) {
    this.form = this.fb.group({
      image: [''],
      name: ['', Validators.required],
      size: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      weight: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      amount: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      linkSocialMedia: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      description: ['', Validators.required],
      type: ['', Validators.required],
      sold: ['false', Validators.required],
      used: ['false', Validators.required],
    });
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
    const surfboard: Surfboard = {
      name: this.form.value.name,
      size: this.form.value.size,
      weight: this.form.value.weight,
      amount: this.form.value.amount,
      linkSocialMedia: this.form.value.linkSocialMedia,
      price: this.form.value.price,
      description: this.form.value.description,
      type: this.form.value.type,
      sold: this.convertToBool(this.form.value.sold),
      used: this.convertToBool(this.form.value.used),
      image: {
        url: this.form.value.image,
      },
    };
    this._surfboardService.addSurfboard(surfboard).subscribe((data) => {
      this._messageService.successMessage(
        'The surfboard was registered successfully',
        'registered',
        4000
      );
      this.router.navigate(['listSurfboard']);
    });
  }

  convertToBool(value: any): boolean {
    if (value == 'true' || value == 1) {
      return true;
    }
    if (value == 'false' || value == 0) {
      return false;
    }
    return false;
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
