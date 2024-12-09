import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Firestore } from '@angular/fire/firestore';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ApplicationConfig ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
