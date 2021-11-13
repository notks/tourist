import { Component, OnInit, Input } from '@angular/core';
import { convertToObject } from 'typescript';
import {url} from '../../../../constants'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() l: any;
  @Input() index: any;
  AverageRating = 4;
  NewRating = 0;
  constructor() {}

  ngOnInit(): void {
   
    fetch(`${url}/rating?id=${this.l.id}`)
      .then((response) => response.json())
      .then((rating) => {
        this.AverageRating = rating;
      });
  }

  updateRating(rating: any): void {
    fetch(
      `${url}/rating/update?id=${this.l.id}&rating=${rating}`,
      { method: 'POST' }
    )
      .then((response) => {if(response.ok)window.location.reload()})
      
  }
}
