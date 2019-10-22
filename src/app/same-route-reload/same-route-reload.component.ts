import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-same-route-reload',
  templateUrl: './same-route-reload.component.html',
  styleUrls: ['./same-route-reload.component.scss']
})
export class SameRouteReloadComponent implements OnInit {
  randomNumber;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit is started!');
    this.randomNumber = Math.random() * 100;
  }

}
