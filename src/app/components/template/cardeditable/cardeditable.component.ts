import { HttpClient } from '@angular/common/http';
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
  upload(file:any):any{

    const fileInput = document.querySelector('#your-file-input') ;
    const formData = new FormData();
    
    formData.append('file', file.files[0]);
    let headers = new Headers();
    headers.append('Content-Type', "undefined");
  
    this.http.post("http://127.0.0.1:8080/picture/upload", formData, {
      
        headers: {'Content-Type': "undefined"}
    }).subscribe(data=>console.log(data))
   
}


/*
    const options: RequestInit= {
      method: 'POST',
      body: formData,
  headers: {
    'Content-Type': 'multipart/form-data',
  }
    };
   */
   // delete options.headers['Content-Type'];
   //fetch("http://127.0.0.1:8080/picture/upload",{method:"post",body:formData})
//console.log(files.files[0])
    
    
  //}

}
