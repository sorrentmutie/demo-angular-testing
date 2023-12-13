import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | undefined = undefined;

  constructor() { }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  getCurrentUser(): User | undefined {
    return this.user;
  }

  logout(): void {
    this.user = undefined;
  }

  login(): Observable<boolean> {
     return of(true).pipe(
      delay(1000),
      tap( () => this.user = { name: 'John', roles: ['admin'], picture: '' } ),
     )
  }

}
