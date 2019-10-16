import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data = {};

  constructor(private http: HttpClient) { }

  doHttpCall() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data) => {
      this.data = data;
    });
  }
}
