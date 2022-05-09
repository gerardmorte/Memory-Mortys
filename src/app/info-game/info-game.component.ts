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

  //COPY FROM COUNT-DOWN
  seconds: number = 59;
  showSeconds: string = 'START!';

  constructor() {}

  ngOnInit(): void {
    const temporizador = setInterval(() => {
      if (this.seconds == -1) {
        clearInterval(temporizador);
      } else if (this.seconds < 10) {
        this.showSeconds = '00:0' + this.seconds--;
      } else {
        this.showSeconds = '00:' + this.seconds--;
      }
    }, 1000);
  }
}
