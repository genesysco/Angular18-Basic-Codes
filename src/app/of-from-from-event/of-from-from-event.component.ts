import { Component , AfterViewInit , ElementRef , ViewChild } from '@angular/core';
import { fromEvent , of , from , pipe , map , tap , take , takeWhile } from 'rxjs';
import { mock } from './helper/mock';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-of-from-from-event',
  standalone: true,
  imports: [],
  templateUrl: './of-from-from-event.component.html',
  styleUrl: './of-from-from-event.component.css'
})
export class OfFromFromEventComponent {
  constructor(private http : HttpClient){}

  @ViewChild('myInput') myInput!:ElementRef;
  ofValue : string = '';

  ngAfterViewInit(){
    // of(['name1', 'name2', 'name3']).subscribe((data) => console.log('Of in Array Mode : ' + data[0]));
    // of('name1', 'name2', 'name3').subscribe(console.log);
    // from(['name1from', 'name2from', 'name3from']).subscribe(console.log);
    // from(['name1from', 'name2from', 'name3from'])
    // .subscribe((data) => console.log('From in Array Mode : ' + data));

    // of (mock).subscribe(console.log);

    // this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(console.log);
    // this.http.get('/assets/mockData.json').subscribe(console.log);

    // fromEvent(this.myInput.nativeElement , 'keyup').subscribe(() => {
    //   let word = this.myInput.nativeElement.value;
    //   console.log(word);
    // });

    fromEvent(this.myInput.nativeElement , 'input').pipe(
      map(event => event as InputEvent ),
      // map(entry => entry.data as string),
      // tap(i => this.ofValue = i)

      // map(input => (input.target as HTMLInputElement).value),
      // tap(entry => this.ofValue = entry)
      ).subscribe(console.log);

    // fromEvent(document , 'keyup').subscribe(console.log);
    
    fromEvent(document , 'click').pipe(
      map(event => event as MouseEvent),
      map(data => {
        return {
          x : data.offsetX,
          y : data.offsetY
        }
      }),
      // take(2),
      takeWhile(data => data.x < 300)
      ).subscribe(console.log);
  }
}
