import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  Details:any[]=[];
  senData(obj:NgForm)
  {
    this.Details.push(obj.value);
       //console.log("full details:",obj.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

