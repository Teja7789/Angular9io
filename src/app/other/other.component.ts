import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  Login(obj:NgForm)
  {
     console.log(obj.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
