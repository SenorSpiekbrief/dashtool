import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';

@NgModule({
  declarations: [ToolbarComponent, ],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatDialogModule, MatMenuModule, SystemMenuComponent, MatIconModule, DragDropModule,DialogWrapperComponent],
  exports: [ToolbarComponent],
})
export class SharedModule {}
