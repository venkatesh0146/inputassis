import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-input-component',
  templateUrl: './my-input-component.component.html',
  styleUrls: ['./my-input-component.component.css']
})
export class MyInputComponentComponent implements OnInit {

  constructor() { }
  myVal = ''
  ngOnInit(): void {
  }

}
