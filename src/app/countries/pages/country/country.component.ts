import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  term: string = 'Hello World!';

  constructor() { }

  search() {
    alert('testing method');
  }

}
