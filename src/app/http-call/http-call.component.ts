import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.scss']
})
export class HttpCallComponent {

  data$ = this.http.get('https://jsonplaceholder.typicode.com/todos/2').pipe(
    catchError((err) => {
      this.snackBar.open('Network request is failed', 'Failed', {
        duration: 1500,
      });
      return of();
    })
  );

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

}
