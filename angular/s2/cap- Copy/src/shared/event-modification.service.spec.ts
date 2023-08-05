import { TestBed } from '@angular/core/testing';

import { EventModificationService } from './event-modification.service';

describe('EventModificationService', () => {
  let service: EventModificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventModificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
