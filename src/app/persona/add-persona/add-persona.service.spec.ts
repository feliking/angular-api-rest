import { TestBed } from '@angular/core/testing';

import { AddPersonaService } from './add-persona.service';

describe('AddPersonaService', () => {
  let service: AddPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
