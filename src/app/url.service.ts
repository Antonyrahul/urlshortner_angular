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
    return this.http.post('https://urlshortnerappantony.herokuapp.com/generateurl',{data})
    
  }
  getlongurl(data):Observable<any>
  {
    console.log(data)
    return this.http.post('https://urlshortnerappantony.herokuapp.com/getlongurl',{data})
    
  }
}
