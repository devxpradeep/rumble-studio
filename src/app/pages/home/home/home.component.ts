import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/game/game.model';
import { GAMES } from '../../../fixtures/game/game.fixture';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public gameList: Game[] = [];
  constructor() {}
  ngOnInit(): void {
    this.fetchAllGames();
  }
  fetchAllGames(){
    //TODO: Fetch all games from the server
    this.gameList = GAMES;
  }
}
