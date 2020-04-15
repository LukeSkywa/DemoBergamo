import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from, interval, Subscription, timer, combineLatest } from 'rxjs';
import { filter, first, distinct, takeUntil, takeWhile, take, map, reduce } from 'rxjs/operators';

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

    // esempio takewhile
    from([5,2,7, 8, 5,8, 2,6]).pipe(
      takeWhile(value => value <8)
    ).subscribe(value=>{
      console.log('VALUE - takewhile: '+value);
    });    

    // esempio take
    from([5,2,7, 8, 5,8, 2,6]).pipe(
      take(4)
    ).subscribe(value=>{
      console.log('VALUE - take: '+value);
    });

    // esempio map
    of(2,3,7,9).pipe(
      map(value => value*value)
    ).subscribe(value=>{
      console.log('VALUE - map: '+value);
    });
    
    of(2,3,7,9).pipe(
      map((value, index) => {
        switch(value){
          case 2: return 'pippo';
          case 7: return 'pluto';
          default: return 'paperino';
        }
      })
    ).subscribe(value=>{
      console.log('VALUE - map: '+value);
    });

    // esempio reduce
    of(2,3,7,9).pipe(
      reduce((acc, value)=>{
        return acc - value;
      })
    ).subscribe(value=>{
      console.log('VALUE - reduce: '+value);
    });

    // esempio combineLatest
    combineLatest(timer(2000, 3000), timer(1000, 4000)).subscribe(([value1, value2])=>{
      console.log('timer1: '+value1);
      console.log('timer2: '+value2);
    });

  }

  ngOnDestroy(): void {
  }
}
