import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-info-game',
  templateUrl: './info-game.component.html',
  styleUrls: ['./info-game.component.css'],
})
export class InfoGameComponent implements OnChanges {
  @Input() getFirstMove!: boolean;
  @Input() getIntentos: number = 0;
  @Input() getParejasOk: number = 0;
  @Input() getArrayLength: number = 0;
  @Output() sendSeconds = new EventEmitter<boolean>();

  seconds: number = 59;
  showSeconds: string = '01:00';

  constructor() {}

  ngOnChanges() {
    if (this.getFirstMove == true) {
      this.getFirstMove = false;

      const temporizador = setInterval(() => {
        if (this.getParejasOk == this.getArrayLength) {
          this.showSeconds = 'WIN!';
        } else if (this.seconds == -1) {
          clearInterval(temporizador);
          this.sendSeconds.emit(true);
          this.showSeconds = 'LOSE!';
        } else if (this.seconds < 10) {
          this.showSeconds = '00:0' + this.seconds--;
        } else {
          this.showSeconds = '00:' + this.seconds--;
        }
      }, 1000);
    }
  }
}
