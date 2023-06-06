import { TestBed } from '@angular/core/testing';

import { PicInterceptor } from './pic.interceptor';

describe('PicInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PicInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PicInterceptor = TestBed.inject(PicInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
