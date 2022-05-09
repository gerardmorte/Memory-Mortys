import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-info-game',
  templateUrl: './info-game.component.html',
  styleUrls: ['./info-game.component.css'],
})
export class InfoGameComponent implements OnChanges {
  @Input() getFirstMove!: boolean;
  @Input() getAttempts: number = 0;
  @Input() getIsMatched: number = 0;
  @Input() getArrayLength: number = 0;
  @Output() sendLoseGame = new EventEmitter<boolean>();

  seconds: number = 59;
  showSeconds: string = 'PLAY! 01:00';

  constructor() {}

  ngOnChanges() {
    if (this.getFirstMove == true) {
      this.getFirstMove = false;

      const temporizador = setInterval(() => {
        if (this.getIsMatched == this.getArrayLength) {
          this.seconds++;
          clearInterval(temporizador);
          if (this.seconds < 10) {
            this.showSeconds = 'WIN! 00:0' + this.seconds;
          } else {
            this.showSeconds = 'WIN! 00:' + this.seconds;
          }
        } else if (this.seconds == -1) {
          this.seconds++;
          clearInterval(temporizador);
          this.sendLoseGame.emit(true);
          if (this.seconds < 10) {
            this.showSeconds = 'LOSE! 00:0' + this.seconds;
          } else {
            this.showSeconds = 'LOSE! 00:' + this.seconds;
          }
        } else if (this.seconds < 10) {
          this.showSeconds = 'PLAY! 00:0' + this.seconds--;
        } else {
          this.showSeconds = 'PLAY! 00:' + this.seconds--;
        }
      }, 1000);
    }
  }
}
