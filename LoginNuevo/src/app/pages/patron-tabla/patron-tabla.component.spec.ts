import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronTablaComponent } from './patron-tabla.component';

describe('PatronTablaComponent', () => {
  let component: PatronTablaComponent;
  let fixture: ComponentFixture<PatronTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatronTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatronTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
