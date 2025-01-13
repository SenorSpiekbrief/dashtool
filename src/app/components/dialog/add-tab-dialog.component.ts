import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-add-tab-dialog',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgIf,
    NgFor],
  templateUrl: './add-tab-dialog.component.html',
  styleUrls: ['./add-tab-dialog.component.scss'],
})
export class AddTabDialogComponent {
  formats = [
    { label: 'A4 (Portrait)', width: 8, height: 12 },
    { label: 'A4 (Landscape)', width: 12, height: 8 },
    { label: 'Letter', width: 8.5, height: 11 },
    { label: 'Legal', width: 8.5, height: 14 },
  ];
  selectedFormat = this.formats[0]; // Default to A4 (Portrait)
  customSize = false;
  customWidth = 8;
  customHeight = 12;

  constructor(public dialogRef: MatDialogRef<AddTabDialogComponent>) {}

  onFormatChange(): void {
    if (!this.customSize) {
      this.customWidth = this.selectedFormat.width;
      this.customHeight = this.selectedFormat.height;
    }
  }

  onCustomSizeChange(): void {
    if (this.customSize) {
      this.customWidth = 1;
      this.customHeight = 1;
    } else {
      this.onFormatChange(); // Reset to selected format size
    }
  }

  confirm(): void {
    console.log(this)
    this.dialogRef.close({
      width: this.customWidth,
      height: this.customHeight,
      label: this.selectedFormat.label,
    });
  }
}
