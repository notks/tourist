import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardeditable',
  templateUrl: './cardeditable.component.html',
  styleUrls: ['./cardeditable.component.scss']
})
export class CardeditableComponent implements OnInit {
  @Input() l:any;
  @Input() index:any
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  if(this.l.status=='active'){
    this.msg="Deactivate"
  }
  else{
    this.msg="Activate"
  }

    

  }
  async changeStatus():Promise<any>{
    if(this.l.status=='active'){
     await fetch(`http://127.0.0.1:8080/locations/status?id=${this.l.id}&action=deactivate`)
      window.location.reload()

    }
     else{
      await fetch(`http://127.0.0.1:8080/locations/status?id=${this.l.id}&action=activate`)
      window.location.reload()

    }
  }
  async delete():Promise<any>{
    await fetch(`http://127.0.0.1:8080/locations/delete?id=${this.l.id}`)
 window.location.reload()

  }

}
