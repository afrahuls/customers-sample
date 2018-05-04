import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId = '';
  password = '';
  users = { 'admin': 'admin123',
    'admin2': 'admin2345' };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.userId.trim().length === 0) {
      window.alert('Please enter User ID');
      return;
    } else if (this.password.trim().length < 6) {
      window.alert('Minimum password length is 6 character');
      return;
    }
    if (this.users.hasOwnProperty(this.userId) && this.users[this.userId] === this.password ) {
      this.router.navigate(['customers']);
    }

  }

}
