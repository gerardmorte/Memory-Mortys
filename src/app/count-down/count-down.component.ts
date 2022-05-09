import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  seconds: number = 59;

  @Input() getIntentos: number = 0;
  @Input() getParejasOk: number = 0;
  @Input() getArrayLength: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const getCountDown = document.getElementById('countDown')!;
    getCountDown.innerHTML = 'START!';
    this.seconds = 59;
    const temporizador = setInterval(() => {
      if (this.getParejasOk == this.getArrayLength) {
        getCountDown.innerHTML = 'WIN!';
      } else if (this.seconds == -1) {
        clearInterval(temporizador);
        getCountDown.innerHTML = 'LOSE!';
        //
        //ENVIAR OUTPUT BOOLEAN A INFO-GAME-COMPONENT, OUTPUT DE INFO-GAME A BOARD-GAME?
      //   const getCards = //getAllCards?
      //   this.elementRef.nativeElement.getElementsByClassName('card');
      // for (let index = 0; index < getCards.length; index++) {
      //   //getCards[index].style.pointerEvents = 'auto';
      //   this.renderer.setStyle(getCards[index], 'pointerEvents', 'none');
      // }

        //
      } else if (this.seconds < 10) {
        getCountDown.innerHTML = '00:0' + this.seconds--;
      } else {
        getCountDown.innerHTML = '00:' + this.seconds--;
      }
    }, 1000);
  }
}
