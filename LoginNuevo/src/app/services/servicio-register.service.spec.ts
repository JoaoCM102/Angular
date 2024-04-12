import { TestBed } from '@angular/core/testing';

import { ServicioRegisterService } from './servicio-register.service';

describe('ServicioRegisterService', () => {
  let service: ServicioRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
