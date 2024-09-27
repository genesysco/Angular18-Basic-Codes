import { Injectable } from '@angular/core';
import { pipe , delay , tap } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConcatMapService {

  constructor(private http : HttpClient) { }

  public concater(val:string){
    
    let body = JSON.stringify({
      title: val,
      body: val
    });

    let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    let options = { headers: headers };

    return this.http.patch(`https://jsonplaceholder.typicode.com/posts/1`, body , options).pipe(
      delay(1000)
      );
  }
}
