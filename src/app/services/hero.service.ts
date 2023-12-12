import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private httpClient: HttpClient) { }
  getHeroes() : Observable<Hero[]> {
    return this.httpClient.get<Hero[]>('');
  }
}
