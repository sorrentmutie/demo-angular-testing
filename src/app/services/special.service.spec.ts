import { TestBed } from '@angular/core/testing';

import { SpecialService } from './special.service';
import { ValueService } from '../demo';

describe('SpecialService', () => {
  let service: SpecialService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    TestBed.configureTestingModule({
      providers: [
        SpecialService,
        { provide: ValueService, useValue: spy }]
    });
    service = TestBed.inject(SpecialService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use ValueService', () => {
    valueServiceSpy.getValue.and.returnValue('stub value');
    expect(service.getValue()).toBe('stub value');
  });

});
