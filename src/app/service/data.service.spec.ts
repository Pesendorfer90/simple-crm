import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { of } from 'rxjs';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {
        provide: DataService,
        useValue: {
          // Mock-Methode des DataService
          getData: jasmine.createSpy('getData').and.returnValue(of([])),
        },
      },],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
