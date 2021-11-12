import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Location } from '../../../model/Location';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
auth:boolean=false
email:string="" 
Locations: Location[] |null= [];

  constructor(private router:Router) { }

  ngOnInit(): void {
  
    let token=localStorage.getItem("authToken")
    console.log(token)
    if(token){
      const helper = new JwtHelperService();
     let user=helper.decodeToken(token)
     this.email=user.email
      this.auth=true
    }
    fetch(`http://127.0.0.1:8080/locations`)
      .then((response) => response.json())
      .then((response) => {
console.log(response)
      
        response.forEach(async (location: any) => {
          await fetch(`http://127.0.0.1:8080/picture?id=${location.id}`)
            .then((urls) => urls.json())
            .then((imageurl) => {
              location.url = imageurl.url;

              this.Locations = response;
            });
        });
      });
  
    if(!this.auth){
this.router.navigate(['/login'])
    }
  }

  logOut():void{
    localStorage.removeItem("authToken")
    this.auth=false
    this.router.navigate(['/login'])

  }

}
