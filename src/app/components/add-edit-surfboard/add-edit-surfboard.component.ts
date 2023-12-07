import { Component } from '@angular/core';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-add-edit-surfboard',
  templateUrl: './add-edit-surfboard.component.html',
  styleUrls: ['./add-edit-surfboard.component.css'],
})
export class AddEditSurfboardComponent {
  addOrEditTitle: string = 'Edit';
  soldStatus: string = 'before';
  usedStatus: string = 'no';

  selectedImage: string | undefined =
    'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor(private imageUploadService: ImageUploadService) {}

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
}
