import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-game',
  templateUrl: './info-game.component.html',
  styleUrls: ['./info-game.component.css'],
})
export class InfoGameComponent implements OnInit {
  @Input() getIntentos: number = 0;
  @Input() getParejasOk: number = 0;
  @Input() getArrayLength: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
