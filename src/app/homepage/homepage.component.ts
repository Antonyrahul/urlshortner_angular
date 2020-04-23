import { Component, OnInit } from '@angular/core';
import {UrlService} from '../url.service'
import {} from '../url.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
//data;
shorturl ;
  constructor(private urlservice:UrlService) { }

  ngOnInit(): void {
  }
  processdata(data)
  {

  //  this.data = document.getElementById("longurl")
   // console.log(this.data)
    this.urlservice.getshorturl(data).subscribe((dataa)=>{
      console.log(dataa.url)
      this.shorturl = dataa.url
  })
  }
}
