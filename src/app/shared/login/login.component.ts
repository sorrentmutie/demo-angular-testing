import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userLogin: UserLogin = { username: '', password: '' }

  constructor(private userService: UserService, private router: Router  ){

  }

  submit(){
    if(this.userLogin.username === 'mario.rossi@gmail.com' &&
       this.userLogin.password === '1234') {
       this.login();
    } else {
      alert('Credenziali errate');
    }
  }

  login(){
    this.userService.login().subscribe( loggedIn => {
      if(loggedIn) {
        this.router.navigate(['/heroes']);
      }
    });
  }
}
