import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  welcome = '';
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ?
       'Welcome, ' + this.userService.user.name : 'Please log in.';
  }

}
