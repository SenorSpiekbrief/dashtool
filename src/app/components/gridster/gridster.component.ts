import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterComponent, GridsterItemComponent } from 'angular-gridster2';

@Component({
  selector: 'app-gridster',
  standalone: true,
  imports: [CommonModule, GridsterComponent, GridsterItemComponent],
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.scss'],
})
export class GridsterWrapperComponent {
  @Input() options!: GridsterConfig;
  @Input() items!: GridsterItem[];
}