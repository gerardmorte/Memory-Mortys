import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memory-Mortys';

  chosenLevel: number = 0;

  showChooseLevel: boolean = true;

  getLevel(e: number){
    this.chosenLevel = e;
    this.showChooseLevel = false;
  }
}
