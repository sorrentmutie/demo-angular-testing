import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { asyncData } from '../utilities/helper';

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

  it('#getHeroes should return expected heroes', (done: DoneFn) => {
    const expectedHeroes = [
      { id: 1, name: 'A'},
      { id: 2, name: 'B'}
    ]

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    service.getHeroes().subscribe({
      next: heroes => {
        expect(heroes).toEqual(expectedHeroes);
        expect(httpClientSpy.get.calls.count()).toBe(1);
        done();
      },
      error: done.fail
    });

  });

});
