import { Component, OnInit ,Input} from '@angular/core';
import { Location } from 'src/app/model/Location';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public placeholder:string="../../../../assets/placeholder-image.png"
@Input() data:any;
@Input() index:any=0;
  constructor() { }

  ngOnInit(): void {
    if(!this.data){
      this.data=null
    }
   
    console.log(this.data)
  }

}
