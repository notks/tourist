import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import {url} from '../../../../constants'

@Component({
  selector: 'app-cardeditable',
  templateUrl: './cardeditable.component.html',
  styleUrls: ['./cardeditable.component.scss']
})
export class CardeditableComponent implements OnInit {
  @Input() l:any;
  @Input() index:any
  msg:string=""
  constructor(private http:HttpClient) { }

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
     await fetch(`${url}/protected/locations/status?id=${this.l.id}&action=deactivate`,{method:"PUT", headers:{
      "Authorization":`Bearer ${localStorage.getItem("authToken")}`}})
      window.location.reload()

    }
     else{
      await fetch(`${url}/protected/locations/status?id=${this.l.id}&action=activate`,{method:"PUT", headers:{
        "Authorization":`Bearer ${localStorage.getItem("authToken")}`}})
      window.location.reload()

    }
  }
  async delete():Promise<any>{
    await fetch(`${url}/protected/locations?id=${this.l.id}`,{method:"DELETE", headers:{
      "Authorization":`Bearer ${localStorage.getItem("authToken")}`
    }})
 window.location.reload()

  }
 



reload():void{

console.log("aaaaaaaaaa")
  window.location.reload()
}
}
