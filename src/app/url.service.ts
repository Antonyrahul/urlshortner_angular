import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http:HttpClient) { }
  getshorturl(data):Observable<any>
  {
    console.log(data)
    return this.http.post('https://urlshortnerappantony.herokuapp.com/generateurl',data)
    
  }
  getlongurl(data):Observable<any>
  {
    console.log(data)
    return this.http.post('https://urlshortnerappantony.herokuapp.com/getlongurl',{shorturl:data})
    
  }

  loginUser(data):Observable<any>{
    console.log(data)
    return this.http.post("https://urlshortnerappantony.herokuapp.com/loginuser",data)
  }

  registerUser(data):Observable<any>{
    console.log(data)
    return this.http.post("https://urlshortnerappantony.herokuapp.com/registeruser",data)
  }

  getUrls(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://urlshortnerappantony.herokuapp.com/getUrls",{email:data})
  }
  gethistory(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://urlshortnerappantony.herokuapp.com/gethistory",{shorturl:data})
  }
}
//https://urlshortnerappantony.herokuapp.com
