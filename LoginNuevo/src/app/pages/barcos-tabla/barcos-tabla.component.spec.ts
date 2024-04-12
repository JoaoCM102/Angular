import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcosTablaComponent } from './barcos-tabla.component';

describe('BarcosTablaComponent', () => {
  let component: BarcosTablaComponent;
  let fixture: ComponentFixture<BarcosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarcosTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarcosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
