
import { Component, Input, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ROUTING_COMPONENTS } from '../../components/routing-components-map';
import { SystemMenuService } from '../../core/services/system-menu.service';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { DialogWrapperComponent } from '../dialog-wrapper/dialog-wrapper.component';
import { MatDialog } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-system-menu',
  standalone: true,
  templateUrl: './system-menu.component.html',
  imports: [MatMenuModule, CommonModule,DragDropModule],
  styleUrls: ['./system-menu.component.scss']
})
export class SystemMenuComponent implements OnInit {
  @Input() isSubmenu: boolean = false;
  @Input() menuItems: any[] = [];
  subMenuMap: { [key: string]: any } = {};

  @ViewChildren('menu') menus!: QueryList<any>;

  constructor(private menuService: SystemMenuService, private dialog: MatDialog) {}

  ngOnInit(): void {
    if (!this.menuItems.length) {
      this.menuService.getMenuConfig().subscribe((menuConfig: any) => {
        console.log(menuConfig)
        this.menuItems = menuConfig;
        this.initializeSubMenus();
      });
    } else {
      this.initializeSubMenus();
    }
  }

  initializeSubMenus(): void {
    // The submenu references will be set after ViewChildren query is resolved
    setTimeout(() => {
      this.menus.forEach((menu, index) => {
        const itemName = this.menuItems[index]?.name;
        if (itemName) {
          this.subMenuMap[itemName] = menu;
        }
      });
    });
  }

  canActivate(guardName?: string): boolean {
    if (!guardName) return true;
    // Placeholder for real guard validation logic
    return true;
  }

  handleClick(item: any): void {
    if (item.component) {
      console.log(`Opening component: ${item.component}`);
      // Use dynamic component loader or router navigation
    }
  }
  openDialog(item: any) {
    const component = this.resolveComponent(item.component);
    if (!component) {
      //console.error(`Component not found: ${item.component}`);
      return;
    }
  
    this.dialog.open(DialogWrapperComponent, {
      width: '400px',
      data: { component },
      panelClass: 'draggable-dialog',
    });
  }

    resolveComponent(componentName: string): any {
        return ROUTING_COMPONENTS[componentName];
    }
}
