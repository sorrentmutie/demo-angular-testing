import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { MockUserService } from './mock-user.service';
import { WelcomeComponent } from './welcome.component';
describe( 'WelcomeComponent', () => {

    let component: WelcomeComponent;
    let userService: UserService;
    beforeEach( () => {
      TestBed.configureTestingModule({
         providers: [
          { provide: UserService, useClass: MockUserService},
          WelcomeComponent
         ]
      });
      component = TestBed.inject(WelcomeComponent);
      userService = TestBed.inject(UserService);
    });

    it('should not have welcome message after construction', () => {
      expect(component.welcome).toBe('');
    });

    it('should welcome logged in user after Angular calls ngOnInit', () => {
      component.ngOnInit();
      expect(component.welcome).toContain(userService.user.name);
    });

});
