import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Location } from '../../../model/Location';
import {url} from '../../../../constants'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public Locations: Location[] |null= [];
  public query:any;
  public status:any;
  selected = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    fetch(`${url}/locations/`)
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

    console.log('Landing page!!');
  }

  onClick(query:any):void{
    fetch(`${url}/locations/name/${query}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        console.log(response.length)

        if(response.length<1){
          console.log("aaaaaaaaaa")
          this.Locations=null;
        }
        response.forEach(async (location: any) => {
          await fetch(`${url}/image?id=${location.id}`)
            .then((urls) => urls.json())
            .then((imageurl) => {
              location.url = imageurl.url;

              this.Locations = response;
            });
        });
      });
  
    console.log(query)
  }
  select(status:any):void{
    fetch(`${url}/locations/importance/${status}`)
    .then((response) => response.json())
    .then((response) => {
      if(!response){
        this.Locations=[]
      }
      response.forEach(async (location: any) => {
        await fetch(`${url}/image?id=${location.id}`)
          .then((urls) => urls.json())
          .then((imageurl) => {
            location.url = imageurl.url;

            this.Locations = response;
          });
      });
    });
   
  
  }
}
