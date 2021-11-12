import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
msg:string=""
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(email:string,password:string):void{
    console.log(email)
    console.log(password)
fetch(`http://127.0.0.1:8080/login?email=${email}&pwd=${password}`).then(res=>res.json()).then(response=>{
  if(response.token){
    localStorage.setItem("authToken",response.token)
    
this.router.navigate(['/dashboard'])
  
  }
    this.msg="Invalid email or password"
  
})
  }

}
