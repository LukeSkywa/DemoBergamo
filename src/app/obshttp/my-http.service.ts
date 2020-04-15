import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameItem } from './model/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) { }

  getGames(author?: string): Observable<HttpResponse<GameItem[]>> {
    let params: HttpParams;
    if (author != null && author !== '') {
      params = new HttpParams().set('author', author);
    }
    return this.httpClient.get<GameItem[]>('http://localhost:3000/games', { observe: 'response', params: params });
  }

  getGame(id: number): Observable<GameItem> {
    return this.httpClient.get<GameItem>('http://localhost:3000/games/' + id);
  }

  deleteGame(id: number){
    return this.httpClient.delete('http://localhost:3000/games/'+id)
  }

  getGamesErr(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/gaes');
  }

  postGame(game: GameItem){
    return this.httpClient.post('http://localhost:3000/games', game);
  }

  updateGame(game: GameItem){
    return this.httpClient.put('http://localhost:3000/games/'+game.id, game);
  }
}
