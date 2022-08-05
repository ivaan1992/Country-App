import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  term: string = '';
  error: boolean = false;

  constructor( private countryService: CountryService ) { }

  search() {
    this.error = false;
    console.log(this.term);

    this.countryService.searchCountry( this.term )
    .subscribe( (ans) => {
      console.log( ans );
      }, ( err => {
        this.error = true;
        console.log()
      })
    );
  }

}
