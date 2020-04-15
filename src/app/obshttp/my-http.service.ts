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
    let httpHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    httpHeader = httpHeader.set('Response-Type', 'application/json');
    let params: HttpParams;
    if (author != null && author !== '') {
      params = new HttpParams().set('author', author);
    }
    return this.httpClient.get<GameItem[]>('http://localhost:3000/games', { observe: 'response', headers: httpHeader, params: params });
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
}
