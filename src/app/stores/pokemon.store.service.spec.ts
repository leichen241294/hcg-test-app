import { TestBed } from '@angular/core/testing';

import { Pokemon.StoreService } from './pokemon.store.service';

describe('Pokemon.StoreService', () => {
  let service: Pokemon.StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pokemon.StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
