import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { GameItem } from '../model/game-item.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  gameForm: FormGroup;

  constructor(private myHttpService: MyHttpService, private fb: FormBuilder) { 
    this.gameForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required]
    })
  }

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

  removeGame(id: number){
    this.myHttpService.deleteGame(id).subscribe(()=>{
      this.retrieveGames();
    });
  }

  addGame(){
    this.myHttpService.postGame(this.gameForm.value).subscribe(()=>{
      this.retrieveGames();
    });
  }

  editGame(){
    this.myHttpService.updateGame(this.gameSelected).subscribe(()=>{
      this.retrieveGames();
    });
  }

}
