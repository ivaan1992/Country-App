import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( term: string ) {
    this.error = false;
    this.term = term;


    this.countryService.searchCapital( term )
    .subscribe( (countries) => {
      console.log(countries);
      this.countries = countries;
    }, (err) => {
      this.error = true;
      this.countries = []
    })
  }

}
