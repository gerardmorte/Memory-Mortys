import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
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

  @ViewChild('showTime') showTime!: ElementRef;

  seconds: number = 59;
  showSeconds: string = 'TIME: 01:00';

  constructor() {}

  ngOnChanges() {
    if (this.getFirstMove == true) {
      this.getFirstMove = false;

      const temporizador = setInterval(() => {
        if (this.getIsMatched == this.getArrayLength) {
          this.seconds++;
          clearInterval(temporizador);
          document.getElementById('showTime')!.style.backgroundColor =
            'lawngreen';
          document.getElementById('attempts')!.style.backgroundColor =
            'lawngreen';
          document.getElementById('matched')!.style.backgroundColor =
            'lawngreen';
          if (this.seconds < 10) {
            this.showSeconds = 'WINNER!';
          }
        } else if (this.seconds == -1) {
          this.seconds++;
          clearInterval(temporizador);
          document.getElementById('showTime')!.style.backgroundColor = 'red';
          document.getElementById('attempts')!.style.backgroundColor = 'red';
          document.getElementById('matched')!.style.backgroundColor = 'red';
          this.sendLoseGame.emit(true);
          if (this.seconds < 10) {
            this.showSeconds = 'LOSER!';
          }
        } else if (this.seconds < 10) {
          this.showSeconds = 'TIME: 00:0' + this.seconds--;
        } else {
          this.showSeconds = 'TIME: 00:' + this.seconds--;
        }
      }, 1000);
    }
  }
}
