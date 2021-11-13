import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {url} from '../../../../constants'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  auth: boolean = false;
  msg: string = '';
  countries:object[]=[]
  constructor(private router: Router) {
    let token = localStorage.getItem('authToken');
    if (token) {
      router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {


  }
  register(email: string, password: string): void {
    if (password.length < 8) {
      this.msg = "Password can't be shorter than 8 characters!";
    } else {
      fetch(
        `${url}/login/register?email=${email}&pwd=${password}`,{method:"POST"}
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
