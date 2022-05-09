import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  seconds: number = 59;
  showSeconds: string = 'START!';

  @Input() getIntentos: number = 0;
  @Input() getParejasOk: number = 0;
  @Input() getArrayLength: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

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
