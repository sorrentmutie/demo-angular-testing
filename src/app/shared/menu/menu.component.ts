import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   constructor(public userService: UserService, private router: Router){ }

   logout(){
     this.userService.logout();
     this.router.navigate(['/login']);
   }
}
