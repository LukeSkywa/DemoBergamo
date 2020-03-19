import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicazioneService {
  private messaggioSubject: Subject<string> =  new Subject();
  messaggio$: Observable<string> = this.messaggioSubject.asObservable();

  pubblicaNuovoMessaggio(value: string){
    // potrebe anche esserci della logica di filtro prima di fare il next
    this.messaggioSubject.next(value);
  }

  constructor() { }
}
