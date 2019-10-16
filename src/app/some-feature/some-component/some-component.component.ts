import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.scss']
})
export class SomeComponentComponent {

  data = {};

  constructor(private http: HttpClient) { }

  doHttpCall() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/2').subscribe((data) => {
      this.data = data;
    });
  }

}
