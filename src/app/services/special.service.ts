import { Injectable } from '@angular/core';
import { ValueService } from '../demo';

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor(private valueService: ValueService) {
    //this.valueService.setValue('special value');
  }

  getValue() {
    return this.valueService.getValue();
  }

}
