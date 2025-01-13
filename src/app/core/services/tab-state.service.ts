import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { AddTabDialogComponent } from '../../components/dialog/add-tab-dialog.component';

export interface Tab {
  id: number;
  label: string;
  items: GridsterItem[];
  gridOptions: GridsterConfig; // Include grid options specific to this tab
}

@Injectable({
  providedIn: 'root',
})
export class TabStateService {
  private tabsSubject = new BehaviorSubject<Tab[]>([]);
  private nextTabId = 1;

  tabs$ = this.tabsSubject.asObservable();

  constructor(private dialog: MatDialog) {
    // Initialize with a default tab
    this.addTab('Default Tab');
  }

  private get tabs(): Tab[] {
    return this.tabsSubject.value;
  }

  addTab(defaultLabel: string = `Tab ${this.nextTabId}`): void {
    const dialogRef = this.dialog.open(AddTabDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
        console.log(result)
      if (result) {
        const { width, height, label } = result;
        const { gridOptions, items } = this.generateGridItems(width, height);
        console.log(gridOptions)
        console.log(items)
        const newTab: Tab = {
          id: this.nextTabId++,
          label,
          items,
          gridOptions,
        };
        console.log(newTab)
        this.tabsSubject.next([...this.tabs, newTab]);
      }
      console.log(this.nextTabId)
    });
  }

  removeTab(tabId: number): void {
    const updatedTabs = this.tabs.filter((tab) => tab.id !== tabId);
    this.tabsSubject.next(updatedTabs);
  }

  private generateGridItems(
    width: number,
    height: number
  ): { gridOptions: GridsterConfig; items: GridsterItem[]; containerStyle: any } {
    const items: GridsterItem[] = Array.from({ length: 4 }, (_, i) => ({
      cols: 2,
      rows: 2,
      x: (i % 2) * 2,
      y: Math.floor(i / 2) * 2,
    }));
  
    const maxCols = Math.max(...items.map((item) => item.x + item.cols));
    const maxRows = Math.max(...items.map((item) => item.y + item.rows));
  
    const gridOptions: GridsterConfig = {
      gridType: 'fit',
      fixedColWidth: 50,
      fixedRowHeight: 50,
      margin: 10,
      outerMargin: true,
      displayGrid: 'onDrag&Resize',
      draggable: { enabled: true },
      resizable: { enabled: true },
      minCols: maxCols,
      minRows: maxRows,
    };
  
    // Convert paper dimensions to pixels (using 96 DPI as standard)
    const dpi = 96; // Typical screen DPI
    const containerStyle = {
      width: `${width * dpi}px`, // Width in pixels
      height: `${height * dpi}px`, // Height in pixels
    };
  
    return { gridOptions, items, containerStyle };
  }}
