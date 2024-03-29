import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  countriesSuggested: Country[] = [];
  displaySuggestions: boolean = false;


  constructor( private countryService: CountryService ) { }

  search( term: string ) {
    this.error = false;
    this.term = term;


    this.countryService.searchCountry( term )
    .subscribe( (countries) => {
      console.log(countries);
      this.countries = countries;
    }, (err) => {
      this.error = true;
      this.countries = []
    })
  }

  suggestions( term: string ) {
    this.error = false;
    this.term = term;
    this.displaySuggestions = true;

    this.countryService.searchCountry( term )
    .subscribe(
      countries => this.countriesSuggested = countries.splice(0,5),
      (err) => this.countriesSuggested = []
    );
  }

  searchSuggested( term: string ) {
    this.search( term );
  }
}
