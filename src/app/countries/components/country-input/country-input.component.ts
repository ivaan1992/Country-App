import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: []
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  term: string = '';

  constructor() { }

  ngOnInit() {
    this.debouncer
      .pipe (
        debounceTime(300)
      )
    .subscribe( value => {
      this.onDebounce.emit( value );
    });
  }

  search() {
    this.onEnter.emit( this.term );
  }

  keyPressed() {
    this.debouncer.next( this.term )
  }
}
