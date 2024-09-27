import { Component , AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { Observable , zip , of , pipe , map , forkJoin , tap , timer } from 'rxjs';


@Component({
  selector: 'app-zip-fork-join',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './zip-fork-join.component.html',
  styleUrl: './zip-fork-join.component.css'
})
export class ZipForkJoinComponent {

  constructor(private http: HttpClient){}

  users: Observable<any>[] = [];
  myUser: any[] = [];

  ngAfterViewInit(){

    // let obs1$ = of('3252352', 'Crucial', '12/21');
    // let obs2$ = of('4574574', 'LG', '10/21');
    // let obs3$ = of('7090000', 'Dell', '05/21');

    // zip(obs1$, obs2$, obs3$).subscribe(console.log);


    // let name$ = of('Foad', 'Rezvan', 'Ferion');
    // let food$ = of('seafood', 'Hamburger', 'Pizza');
    // let drink$ = of('Water', 'Cola', 'Energy Drink');

    // zip(name$,food$,drink$).subscribe(console.log);

    // zip(name$,food$,drink$).pipe(
    //   map(([name,food,drink]) => {
    //     return {name, food, drink}
    //   }),
    //   ).subscribe(console.log);

    for(let i = 1; i < 6 ; i++)
    {
      this.users.push(this.getUser(i));
    }

    // forkJoin(this.users).subscribe(console.log);

    // forkJoin({
    //   foo: of(1, 2, 3, 4),
    //   bar: Promise.resolve(8),
    //   baz: timer(4000),
    //   // ban: throwError(3412352)
    //   // ban: interval(1000).pipe(take(3))
    // }).subscribe(val => console.log('with object: ', val));

    
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}