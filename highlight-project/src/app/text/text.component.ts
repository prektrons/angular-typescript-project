import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  title = "Event Binding in Angular";

  clickCount = 0;
  clickMe() {
    this.clickCount++;
  }

 

  items = [{ name: 'ITem 1', selected: false }];
  constructor() { }

  ngOnInit(): void {
  }

}
