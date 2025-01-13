import {
    Component,
    Inject,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ComponentRef,
    ComponentFactoryResolver,
    Injector,
    OnDestroy
  } from '@angular/core';
  import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
  import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
  import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
  
  @Component({
    selector: 'app-dialog-wrapper',
    standalone: true,
    templateUrl: 'dialog-wrapper.component.html',
    styleUrls: ['./dialog-wrapper.component.scss'],
    imports: [CommonModule, CdkDrag, CdkDragHandle,MatIconModule]
  })
  export class DialogWrapperComponent implements OnInit, OnDestroy {
    @ViewChild('dynamicContentContainer', { read: ViewContainerRef, static: true })
    dynamicContainer!: ViewContainerRef;
  
    title: string = 'Dialog';
    width: number = 400; // Default width
    height: number = 300; // Default height
  
    private componentRef?: ComponentRef<any>;
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any, // Injected data from MatDialog
      private dialogRef: MatDialogRef<DialogWrapperComponent>,
      private componentFactoryResolver: ComponentFactoryResolver,
      private injector: Injector
    ) {
      // Set dialog title and dimensions if provided
      if (data) {
        this.title = data.title || this.title;
        this.width = data.width || this.width;
        this.height = data.height || this.height;
      }
    }
  
    ngOnInit() {
      this.loadComponent();
    }
  
    ngOnDestroy() {
      if (this.componentRef) {
        this.componentRef.destroy();
      }
    }
  
    loadComponent() {
      if (!this.data?.component) {
        console.error('No component provided for dynamic loading');
        return;
      }
  
      // Clear any existing views
      this.dynamicContainer.clear();
  
      // Create the component dynamically
      const factory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
      this.componentRef = this.dynamicContainer.createComponent(factory, 0, this.injector);
  
      // Pass data to the component’s @Input if needed
      if (this.data.data && this.componentRef.instance) {
        Object.assign(this.componentRef.instance, this.data.data);
      }
    }
  
    close() {
      this.dialogRef.close();
    }
  }
  