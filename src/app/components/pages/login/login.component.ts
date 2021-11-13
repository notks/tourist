import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {url} from '../../../../constants'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
msg:string=""
  constructor(private router:Router) {   let token = localStorage.getItem('authToken');
  if (token) {
    router.navigate(['/dashboard']);
  }}

  ngOnInit(): void {
  }
  login(email:string,password:string):void{
   
fetch(`${url}/login?email=${email}&pwd=${password}`,{method:"POST"}).then(res=>res.json()).then(response=>{
  if(response.token){
    localStorage.setItem("authToken",response.token)
    
this.router.navigate(['/dashboard'])
  
  }
    this.msg="Invalid email or password"
  
})
  }

}
