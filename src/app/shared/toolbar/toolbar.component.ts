import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogWrapperComponent } from '../dialog-wrapper/dialog-wrapper.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogWrapperComponent, {
      width: '400px',
      data: { title: 'Dialog Title', content: 'Dialog Content' }
    });
  }
}
