import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsterComponent } from './gridster.component';

describe('GridsterComponent', () => {
  let component: GridsterComponent;
  let fixture: ComponentFixture<GridsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridsterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
