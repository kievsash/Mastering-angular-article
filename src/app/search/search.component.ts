import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {originalText} from './localization';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('search', {static: true}) searchElemRef: ElementRef;

  text$: Observable<string>;

  ngOnInit() {
    this.text$ = fromEvent(this.searchElemRef.nativeElement, 'keyup').pipe(
      map((e: Event) => (e.target as HTMLInputElement).value),
      debounceTime(300),
      distinctUntilChanged(),
      map((searchText) => this.getHighlightedText(searchText)),
      startWith(originalText)
    );
  }

  getHighlightedText(searchText) {
    const regexp = new RegExp(searchText, 'gi');
    const highlightedText = originalText.replace(regexp, '<span class="highlight">$&</span>');
    return highlightedText;
  }
}
