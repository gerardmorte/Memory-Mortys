import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-level',
  templateUrl: './choose-level.component.html',
  styleUrls: ['./choose-level.component.css']
})
export class ChooseLevelComponent implements OnInit {

  chosenLevel: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setLevel(level: number) {
    this.chosenLevel = level;
  }

}
