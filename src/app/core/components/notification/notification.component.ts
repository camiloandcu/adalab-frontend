import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSuccess(msg: string){
    this.snackBar.open(msg, "OK", {panelClass: ['green-snackbar']})
  }

}
