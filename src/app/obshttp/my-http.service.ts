import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/games');
  }

  getGamesErr(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/gaes');
  }
}
