import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameItem } from './model/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<HttpResponse<GameItem[]>>{
    return this.httpClient.get<GameItem[]>('http://localhost:3000/games', { observe: 'response'});
  }

  getGamesErr(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/gaes');
  }
}
