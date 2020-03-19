import { TestBed } from '@angular/core/testing';

import { ComunicazioneService } from './comunicazione.service';

describe('ComunicazioneService', () => {
  let service: ComunicazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
