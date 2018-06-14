import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<{id: number, name: string}> ();
  @Output() gameEnded = new EventEmitter<>();
  interval;
  lastId = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    console.log("clicked");
    this.interval = setInterval(() => {
      this.gameStarted.emit({
        id: this.lastId,
        name: 'Game ' + this.lastId
      });
      this.lastId ++;
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }

}
