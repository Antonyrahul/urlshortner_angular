import { Component, OnInit } from '@angular/core';
import {UrlService} from '../url.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
id;
prod
  constructor(private urlservice:UrlService,private activatedroute:ActivatedRoute) {
    this.id = this.activatedroute.snapshot.params.id
 
   this.urlservice.gethistory(this.id).subscribe((data)=>{
    console.log(data.data[0].history)
    this.prod = data.data[0].history
   })
   }

  ngOnInit(): void {
    
    }
  

}
