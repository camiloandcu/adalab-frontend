import { Injectable, Injector, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  showSuccess(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'OK', {panelClass: ['app-notification-success'], duration: 2000});
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'OK', {panelClass: ['app-notification-error'], duration: 3000});
    });
  } 
}
