import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private _snackBar: MatSnackBar) {}

  successMessage(text: string, action: string, time: number) {
    this._snackBar.open(text, action, {
      duration: time,
    });
  }
}
