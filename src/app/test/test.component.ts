import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = "Sathish Kumar K";

  constructor() { }

  ngOnInit() {
  }

greetUser(){
 return "Hello " + this.name;
}
}