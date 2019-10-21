import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mastering-angular';

  constructor(private route: Router) {
  }

  ngOnInit() {
    // this.route.events.pipe(
    //   tap(() => console.log('tap')),
    //   filter((event) => event instanceof NavigationEnd
    //     && event.urlAfterRedirects === '/home'
    //     && event.url.search(/\?/) > -1 // look for '?'
    //   ),
    //   take(1) // run handler once
    // ).subscribe((event: NavigationEnd) => {
    //   console.log('Test')
    //   // extract queryParams as value: pair object.
    //   const queryParams = event.url.split('?')[1]
    //     .split('&')
    //     .reduce((acc, item) => ({...acc, [item.split('=')[0]]: item.split('=')[1]}), {});
    //
    //   this.route.navigate([], {
    //     queryParams, // reload current route and add queryParams
    //     queryParamsHandling: 'merge'
    //   });
    // });
  }
}
