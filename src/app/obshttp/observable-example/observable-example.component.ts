import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from, interval, Subscription, timer } from 'rxjs';
import { filter, first, distinct, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit(): void {
    

    timer(2000).subscribe(() =>{
      console.log('Timer');
    });

    interval(1000).pipe(
      takeUntil(timer(5000))
    ).subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`)
    );

    // esempio filter
    of(5,8,6).pipe(
      filter(value=>{
        return value % 2 === 0;
      })
    ).subscribe(value=>{
      console.log('VALUE - filter: '+value);
    })

    // esempio first
    from(['pippo', 'pluto', 'paperino']).pipe(
      first()
    ).subscribe(value=>{
      console.log('VALUE - first: '+value);
    })
    
    from([5,2,7,8,6]).pipe(
      first(value=>{
        return value % 2 === 0;
      })
    ).subscribe(value=>{
      console.log('VALUE - first: '+value);
    })

    // questo sotto è uguale a quello sopra
    from([5,2,7,8,6]).pipe(
      filter(value=>{
        return value % 2 === 0;
      }),
      first()
    ).subscribe(value=>{
      console.log('VALUE - first: '+value);
    });

    // esempio distinct
    
    from([5,2,7, 8, 5,8, 2,6]).pipe(
      distinct()
    ).subscribe(value=>{
      console.log('VALUE - distinct: '+value);
    });
  }

  ngOnDestroy(): void {
  }
}
