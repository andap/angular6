import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games = [];

  onGameStarted(gameData: {id: number, name: string}) {
    this.games.push({
      id: gameData.id,
      name: gameData.name
    });
  }
}
