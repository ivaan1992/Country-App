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

  constructor( private countryService: CountryService ) { }

  search() {
    this.error = false;
    console.log(this.term);

    this.countryService.searchCountry(this.term)
    .subscribe( (countries) => {
      console.log(countries);
      this.countries = countries;
    }, (err) => {
      this.error = true;
      this.countries = []
    })
  }
}
