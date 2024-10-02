import { TestBed } from '@angular/core/testing';

import { PacientesService } from './consultorio.service';

describe('PacientesService', () => {
  let service: PacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
