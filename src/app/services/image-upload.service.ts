import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  uploadImage(file: File): Observable<string> {
    // Simulamos una carga de imagen y devolvemos una URL local
    const localImageUrl = URL.createObjectURL(file);
    return of(localImageUrl);
  }
}
