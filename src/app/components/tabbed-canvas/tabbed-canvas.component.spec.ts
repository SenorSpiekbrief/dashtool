import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedCanvasComponent } from './tabbed-canvas.component';

describe('TabbedCanvasComponent', () => {
  let component: TabbedCanvasComponent;
  let fixture: ComponentFixture<TabbedCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbedCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabbedCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
