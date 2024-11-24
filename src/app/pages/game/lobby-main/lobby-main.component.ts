import { Component, OnInit } from '@angular/core';
import { UserStatus } from '../models/UserStatus';
import { IconsConstant } from '../../../shared/constants/icons-constants';
import { Game } from '../../../models/game/game.model';
import { GAMES } from '../../../fixtures/game/game.fixture';

@Component({
  selector: 'app-lobby-main',
  templateUrl: './lobby-main.component.html',
  styleUrl: './lobby-main.component.scss'
})
export class LobbyMainComponent implements OnInit {
  usersWithStatus: UserStatus[] = [];
  games: Game[] = [];
  readonly ICONS = IconsConstant;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  ngOnInit(): void {
    this.usersWithStatus = [
      {gameName: 'Bingo',inGame: true,isOnline: true,userFullName: 'Pradeep Singh',username: 'pradesingh', avatar:'https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg' ,gameAvatar:'https://media.istockphoto.com/id/1252787937/vector/impression.jpg?s=612x612&w=0&k=20&c=fnHTVScp1F_29KIjVF1BX5X3v5YGanAAV6xI5mWykrg='},
      {gameName: 'Chrades',inGame: true,isOnline: true,userFullName: 'Shadow Blade',username: 'shadow-blade', avatar:'https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg', gameAvatar:'https://media.istockphoto.com/id/1252787937/vector/impression.jpg?s=612x612&w=0&k=20&c=fnHTVScp1F_29KIjVF1BX5X3v5YGanAAV6xI5mWykrg='},
      {gameName: 'Cross county',inGame: true,isOnline: true,userFullName: 'X men',username: 'xmen',avatar:'https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg' , gameAvatar:'https://media.istockphoto.com/id/1252787937/vector/impression.jpg?s=612x612&w=0&k=20&c=fnHTVScp1F_29KIjVF1BX5X3v5YGanAAV6xI5mWykrg='},
    ]

    this.fetchAllGames()
  }

  fetchAllGames(){
    //TODO: Fetch all games from the server
    this.games = GAMES;
  }
}
