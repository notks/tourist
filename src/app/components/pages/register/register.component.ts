import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  auth: boolean = false;
  msg: string = '';
  constructor(private router: Router) {
    let token = localStorage.getItem('authToken');
    if (token) {
      router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {}
  register(email: string, password: string): void {
    if (password.length < 8) {
      this.msg = "Password can't be shorter than 8 characters!";
    } else {
      fetch(
        `http://127.0.0.1:8080/login/register?email=${email}&pwd=${password}`
      ).then((response) => {
        if (response.status === 409) {
          this.msg = 'E-mail already taken!';
        } else {
          this.router.navigate(['login']);
        }
      });
    }
  }
}
