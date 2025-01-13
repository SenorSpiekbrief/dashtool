import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridsterWrapperComponent } from '../gridster/gridster.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { TabStateService, Tab } from '../../core/services/tab-state.service';

@Component({
  selector: 'app-tabbed-canvas',
  standalone: true,
  imports: [CommonModule, GridsterWrapperComponent, MatTabsModule],
  templateUrl: './tabbed-canvas.component.html',
  styleUrls: ['./tabbed-canvas.component.scss'],
})
export class TabbedGridComponent implements OnInit {
  tabs: Tab[] = []; 

  constructor(private tabStateService: TabStateService) {
  }
  ngOnInit() {
    this.tabStateService.tabs$.subscribe((tabs) => (this.tabs =  [ ...tabs]));
  }

  addTab(): void {
    this.tabStateService.addTab();
  }
  
  closeTab(tabId: number): void {
    this.tabStateService.removeTab(tabId);
  }
}