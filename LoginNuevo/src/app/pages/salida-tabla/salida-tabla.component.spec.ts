import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaTablaComponent } from './salida-tabla.component';

describe('SalidaTablaComponent', () => {
  let component: SalidaTablaComponent;
  let fixture: ComponentFixture<SalidaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalidaTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
