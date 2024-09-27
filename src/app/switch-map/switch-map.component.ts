import { Component , AfterViewInit , ViewChild , ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pipe , mergeMap , delay , of , concatAll , tap , toArray , concatMap , mergeAll } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent {

  Result: number[] = [];

  ngAfterViewInit(){
    // const obs1$ = of(1,2).pipe(delay(2000));
    // const obs2$ = of(3,4).pipe(delay(1000));
    // const obs3$ = of(5,6).pipe(delay(3000));
    // const obs4$ = of(obs1$, obs2$, obs3$);
    // const obs5$ = of(obs1$, obs2$, obs3$).pipe(concatAll());
    const obs6$ = of(of(of(1,2))).pipe(mergeAll(), mergeAll(), delay(1));

    // obs5$.subscribe({
    //   next: value => this.Result.push(value)
    // });

    obs6$.pipe(
      tap(i => this.Result.push(i))
      ).subscribe();

    
  }

}