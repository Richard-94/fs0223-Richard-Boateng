import { TestBed } from '@angular/core/testing';

import { LinksInterceptor } from './links.interceptor';

describe('LinksInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LinksInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LinksInterceptor = TestBed.inject(LinksInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
