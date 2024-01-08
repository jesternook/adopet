import { Component } from '@angular/core';

export interface Card {
  picture: string;
  name: string;
  age: number;
  description: string;
  location: string;
  contact: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  

}
