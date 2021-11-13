import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from "../../../model/Location";
import {url} from '../../../../constants'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  auth: boolean = false;
  email: string = '';
  cityMsg: string = 'City';
  Locations: Location[] | null = [];
  Countries: any;
  Cities: any;
   headers=new HttpHeaders().set( "Authorization","Bearer "+localStorage.getItem("authToken"))
   
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem('authToken');
    if (token) {
      const helper = new JwtHelperService();
      let user = helper.decodeToken(token);
      this.email = user.email;
      this.auth = true;
    }
    fetch(`${url}/protected/locations`,{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((response) => {
        response.forEach(async (location: any) => {
          await fetch(`${url}/image?id=${location.id}`)
            .then((urls) => urls.json())
            .then((imageurl) => {
              location.url = imageurl.url;

              this.Locations = response;
            });
        });
      });

    if (!this.auth) {
      this.router.navigate(['/login']);
    }
    this.getCountries();
  }
  saveLocation(
    name: any,
    description: any,
    long: any,
    lat: any,
    importance: any,
    country: any,
    city: any
  ): void {

    
   
    this.http.post<any>(`${url}/protected/`, {
        name:name,
        description:description,
        long:long,
        lat:lat,
        istat:importance,
        city_id:city,
        country_id:country
      },{headers:this.headers})
      .subscribe((data) => {
        window.location.reload();
      });
  }
  logOut(): void {
    localStorage.removeItem('authToken');
    this.auth = false;
    this.router.navigate(['/login']);
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          //this.closeResult = 'Closed with: ${result}';
        },
        (reason) => {
          //this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
        }
      );
  }
  getCountries(): void {
    fetch(`${url}/protected/country`,{ headers:{
      "Authorization":`Bearer ${localStorage.getItem("authToken")}`}})
      .then((response) => response.json())
      .then((data) => {
        this.Countries = data;
      });
  }
  getCities(id: any): void {
    fetch(`${url}/protected/city?country_id=${id}`,{ headers:{
      "Authorization":`Bearer ${localStorage.getItem("authToken")}`}})
      .then((response) => response.json())
      .then((data) => {
        this.Cities = data;
      });
  }
  saveCity(country: any, city: any): void {
    console.log(country);
    console.log(city);
    this.http
      .post<any>(`${url}/protected/city`, {
        name: city,
        country_id: country,
      },{headers:this.headers})
      .subscribe((data) => window.location.reload());
  }
  saveCountry(data: any): void {
  
    this.http
      .post<any>(`${url}/protected/country`, { name: data },{headers:this.headers})
      .subscribe((data) => window.location.reload());
  }
}
