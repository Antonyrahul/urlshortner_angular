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
prod;
locationarray=[];
result = { };
countryname = [];
countrycount= [];
a;

  constructor(private urlservice:UrlService,private activatedroute:ActivatedRoute) {
    console.log("in")
    this.id = this.activatedroute.snapshot.params.id
 
   this.urlservice.gethistory(this.id).subscribe((data)=>{
    console.log(data.data[0].history)
    this.prod = data.data[0].history
    for(var i in this.prod)
    {
      for (var j in this.prod[i])
      {
      if(j == "location")
     this.locationarray.push(this.prod[i][j])
    
    }
  }

    console.log(this.locationarray)
    this.a = this.locationarray;
for(var k = 0; k < this.locationarray.length; ++k) {
    if(!this.result[this.a[k]])
        this.result[this.a[k]] = 0;
    ++this.result[this.a[k]];
    
}

console.log(this.result)
for (var z in this.result)
{
  console.log(z)
  this.countryname.push(z)
  this.countrycount.push(this.result[z])
}
console.log(this.countrycount)
console.log(this.countryname)
   })
   
 
   }

  ngOnInit(): void {
    
    }
    public chartType: string = 'bar';

    public chartDatasets: Array<any> = [
      { data: this.countrycount, label: 'Country details' }
    ];
  
    public chartLabels: Array<any> = this.countryname;
  
    public chartColors: Array<any> = [
      {
        backgroundColor: [

          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2,
      }
    ];
  
    public chartOptions: any = {
      responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
 
  
    
  

}
