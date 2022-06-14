import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){
         
  }
  onSubmit(data: any){
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'responseType': 'json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Content-type',
      
      
      
  });
 
        
        
    this.http.post('https://aol8m5c62j.execute-api.ap-south-1.amazonaws.com/dev/user/create',data,{headers: headers }).subscribe((result)=>
    console.warn(result))
    console.warn(data)
  }
}
