import { Component , AfterViewInit } from '@angular/core';
import { RouterOutlet , RouterLink } from '@angular/router';
import { UserComponent } from './user/user.component'; 
import { IUser } from './Users-Interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , UserComponent , CommonModule , 
    FormsModule , RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  selectedUser!: IUser;
  title = 'Angular Basic Project & Codes ...';
  myOnlyUser : IUser = {
    name: 'App',
    age : 19
  }

  users : IUser[] = [
      {
        name: 'Karim',
        age : 162
      },
      {
        name: 'rahim',
        age : 192
      },
      {
        name: 'mahmood',
        age : 11
      },
      {
        name: 'goli',
        age : 18
      }
    ];
  section1: string = 'd-none';
  section2: string = 'd-none';
  
  ngAfterViewInit():void {
    console.log("From App Component: " + this.myOnlyUser.name + " " + this.myOnlyUser.age);
  }

  selectChanged(){
    console.log(this.selectedUser);
  }

  sectionOne(){
    this.section1 == 'd-none'? this.section1 = '' : this.section1 = 'd-none';
  }

  sectionTwo(){
    this.section2 == 'd-none'? this.section2 = '' : this.section2 = 'd-none';
  }
}