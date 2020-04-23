import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
import { UrlService } from '../url.service'

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  id;

  constructor(private activatedroute:ActivatedRoute,private urlservice:UrlService) { 
    this.id = this.activatedroute.snapshot.params.id
    this.urlservice.getlongurl(this.id).subscribe((data)=>{
      console.log(data.data.longurl)
      window.open(data.data.longurl,"_self")
      
  });
}

  ngOnInit(): void {
  }

}
