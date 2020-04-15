import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { GameItem } from '../model/game-item.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameList: GameItem[] = [];
  otherGameList: GameItem[] = [];
  gameSelected: GameItem;
  selectedAuthor: string;

  constructor(private myHttpService: MyHttpService) { }

  ngOnInit(): void {
    this.retrieveGames();

    this.myHttpService.getGamesErr().pipe(
      catchError(err => {
        return of([]);
      })
    ).subscribe(reponse => {
      this.otherGameList = reponse;
    }, err => {
      console.log('error');
    });
  }

  retrieveGames(){
    this.myHttpService.getGames(this.selectedAuthor).subscribe(reponse => {
      this.gameList = reponse.body;
    }, err => {
      console.log('error');
    });
  }

  showDetail(id: number) {
    this.myHttpService.getGame(id).subscribe(response => {
      this.gameSelected = response;
    });
  }

}
