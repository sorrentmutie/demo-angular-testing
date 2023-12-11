import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';

describe('HeroService', () => {
  let service: HeroService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        HeroService,
        { provide: HttpClient, useValue: httpClientSpy }]
    });

    service = TestBed.inject(HeroService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
