import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css'],
})
export class BoardGameComponent implements OnInit {
  @ViewChild('card') card: ElementRef;

  @Input() getChosenLevel: number = 0;

  firstCard: any;
  firstCardId: string = '';
  secondCard: any;
  secondCardId: string = '';
  flipCardCount: number = 0;
  intentos: number = 0;
  parejasOk: number = 0;
  doblarArray: any = [];

  arrayImagenes = [
    { imagen: 'assets/img/morty1.png', pos: '1', id: '1' },
    { imagen: 'assets/img/morty2.png', pos: '2', id: '2' },
    { imagen: 'assets/img/morty3.png', pos: '3', id: '3' },
    { imagen: 'assets/img/morty4.png', pos: '4', id: '4' },
    { imagen: 'assets/img/morty5.png', pos: '5', id: '5' },
    { imagen: 'assets/img/morty6.png', pos: '6', id: '6' },
    { imagen: 'assets/img/morty7.png', pos: '7', id: '7' },
    { imagen: 'assets/img/morty8.png', pos: '8', id: '8' },
    { imagen: 'assets/img/morty9.png', pos: '9', id: '9' },
    { imagen: 'assets/img/morty10.png', pos: '10', id: '10' },
    { imagen: 'assets/img/morty11.png', pos: '11', id: '11' },
    { imagen: 'assets/img/morty12.png', pos: '12', id: '12' },
    { imagen: 'assets/img/morty13.png', pos: '13', id: '13' },
    { imagen: 'assets/img/morty14.png', pos: '14', id: '14' },
    { imagen: 'assets/img/morty15.png', pos: '15', id: '15' },
    { imagen: 'assets/img/morty16.png', pos: '16', id: '16' },
    { imagen: 'assets/img/morty17.png', pos: '17', id: '17' },
    { imagen: 'assets/img/morty18.png', pos: '18', id: '18' },
    { imagen: 'assets/img/morty19.png', pos: '19', id: '19' },
    { imagen: 'assets/img/morty20.png', pos: '20', id: '20' },
    { imagen: 'assets/img/morty21.png', pos: '21', id: '21' },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.getChosenLevel == 15) {
      const getBoardGame = document.getElementById('board-game')!;
      getBoardGame.style.gridTemplateColumns = 'auto auto auto auto auto';
      getBoardGame.style.gridTemplateRows = 'auto auto auto auto auto auto';
    }

    this.fisherYatesShuffle(this.arrayImagenes);

    let newArray = this.arrayImagenes.slice(0, this.getChosenLevel);

    for (let index = 0; index < newArray.length; index++) {
      this.doblarArray.push(newArray[index]);
      this.doblarArray.push({
        imagen: newArray[index].imagen,
        pos: newArray[index].pos,
        id: String(Number(newArray[index].id) * 100),
      });
    }

    this.fisherYatesShuffle(this.doblarArray);
  }

  fisherYatesShuffle(arr: any) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); //random index
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }

  getId(id: any) {
    console.log(document.getElementById(id)?.classList);
  }

  addRotateCard(id: any) {
    const element = document.getElementById(id)!;
    element.children[0].classList.add('rotateFront');
    element.children[1].classList.add('rotateBack');

    if (this.flipCardCount == 0) {
      this.firstCard = element.classList[0];
      this.firstCardId = element.id;
      this.flipCardCount++;
    } else if (this.flipCardCount == 1) {
      this.secondCard = element.classList[0];
      this.secondCardId = element.id;
      this.flipCardCount++;

      const getCards =
        this.elementRef.nativeElement.getElementsByClassName('card');
      for (let index = 0; index < getCards.length; index++) {
        getCards[index].style.pointerEvents = 'none';
      }

      setTimeout(() => {
        this.checkMatch(/*identificador*/);
      }, 1000);
    } else {
      this.flipCardCount = 0;
    }
  }

  checkMatch() {
    if (
      this.firstCard != this.secondCard ||
      this.firstCardId == this.secondCardId /*&& flipCardCount != 2*/
    ) {
      document
        .getElementById(this.firstCardId)
        ?.children[0].classList.remove('rotateFront');
      document
        .getElementById(this.firstCardId)
        ?.children[1].classList.remove('rotateBack');
      document
        .getElementById(this.secondCardId)
        ?.children[0].classList.remove('rotateFront');
      document
        .getElementById(this.secondCardId)
        ?.children[1].classList.remove('rotateBack');

      //SUMAR INTENTOS
      this.intentos++;
      //document.getElementById("intentos").innerHTML = "Intentos: " + intentos;
    }

    //  if(firstCard == secondCard && firstCardId != secondCardId){
    //      parejasOk++;
    //      document.getElementById("pRestantes").innerHTML = "Parejas restantes " + parejasOk + "/8";
    //  }

    if (this.flipCardCount == 2) {
      this.flipCardCount = 0;
      this.firstCard,
        this.secondCard,
        this.firstCardId,
        (this.secondCardId = '');
    }

    const getCards =
      this.elementRef.nativeElement.getElementsByClassName('card');
    for (let index = 0; index < getCards.length; index++) {
      getCards[index].style.pointerEvents = 'auto';
    }
  }
}
