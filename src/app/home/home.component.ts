import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  params = {};

  constructor(private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.aroute.snapshot.queryParams;
  }
}
