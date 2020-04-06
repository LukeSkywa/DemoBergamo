import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from, interval, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit, OnDestroy {
  mysubs: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.mysubs = interval(1000).subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`)
    );

    of(5,8,6).pipe(
      filter(value=>{
        return true;
      })
    ).subscribe(value=>{
      console.log('VALUE: '+value);
    })
  }

  ngOnDestroy(): void {
    this.mysubs.unsubscribe();
  }
}
