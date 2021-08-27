import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  receivedData:any[]=[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.makeAHttpReq().subscribe((res)=>{
      console.log(res);
      this.receivedData=res;
    })
  
    
  }

}
