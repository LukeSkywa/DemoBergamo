import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { GameItem } from '../model/game-item.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameList: GameItem[] = [];

  constructor(private myHttpService: MyHttpService) { }

  ngOnInit(): void {
    this.myHttpService.getGames().subscribe(reponse => {
      this.gameList = reponse;
    }, err => {
      console.log('error');
    });
    
    this.myHttpService.getGamesErr().subscribe(reponse => {
      this.gameList = reponse;
    }, err => {
      console.log('error');
    });
  }

}
