import { Component , AfterViewInit , ViewChild , ElementRef } from '@angular/core';
import { fromEvent , pipe , tap , map , concatMap , mergeMap , exhaustMap } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { ConcatMapService } from '../concat-map.service';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent {

  constructor(private http: HttpClient ,
    private concatService: ConcatMapService
    ){}

  @ViewChild('concatMapInput')myInput!:ElementRef;
  @ViewChild('saveBtn')saveBtn!:ElementRef;

  ngAfterViewInit(){

    fromEvent(this.myInput.nativeElement, 'input').pipe(
      map(input => input as InputEvent),
      map(i => (i.target as HTMLInputElement).value),
      // concatMap(entry => this.concatService.concater(entry))
      // mergeMap(entry => this.concatService.concater(entry))
      // exhaustMap(entry => this.concatService.concater(entry))
      ).subscribe(console.log);
    


    // of(1,2,3,4,5,6,7,8,9).subscribe(val => {

    //   let body = JSON.stringify({
    //     body: 'Test123',
    //     title: 'Test Title'
    //   });

    //   let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    //   let options = { headers: headers }

    //   this.http.put(`https://jsonplaceholder.typicode.com/posts/${val}`, body, options)
    //     .subscribe(console.log);
    // });

    fromEvent(this.saveBtn.nativeElement , 'click').pipe(
      tap(() => console.log("clicked!")),
      exhaustMap(() => this.concatService.concater("Hello")),
      tap(i => console.log(i))
      ).subscribe();
  }
}