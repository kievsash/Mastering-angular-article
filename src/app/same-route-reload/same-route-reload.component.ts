import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-same-route-reload',
  templateUrl: './same-route-reload.component.html',
  styleUrls: ['./same-route-reload.component.scss']
})
export class SameRouteReloadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit is started!');
  }

}
