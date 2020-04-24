import { Component, OnInit } from '@angular/core';
import {UrlService} from '../url.service'



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
//data;
email;
name;
shorturl ;
userdata;
prod;
  constructor(private urlservice:UrlService) { 
  /* this.name = localStorage.getItem('name')
   this.email = localStorage.getItem('email')
   this.urlservice.getUrls(this.email).subscribe((data)=>{
    console.log(data.data)
    this.prod = data.data
})*/
this.displayurls();
  
  }

  ngOnInit(): void {
    
  }
  displayurls(){
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    this.urlservice.getUrls(this.email).subscribe((data)=>{
     console.log(data.data)
     this.prod = data.data
 })
  }
  async processdata(data)
  {
    this.email= localStorage.getItem('email')
    
  

  //  this.data = document.getElementById("longurl")
   // console.log(this.data)
   this.userdata =
   {
     email:this.email,
     longurl:data

   }
   await this.urlservice.getshorturl(this.userdata).subscribe((dataa)=>{
      console.log(dataa.url)
      this.shorturl = dataa.url
  })
  this.displayurls();
  }
}
