import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles:['h2{background:linear-gradient(to right, #00ff00, #493240);color:red;padding: 1.0rem ;text-align: center;}'],
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
