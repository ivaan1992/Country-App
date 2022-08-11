import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  activeBtn( region: string ): string {
      return( region === this.regionActive )
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  }

  activeRegion( region: string ) {

    this.regionActive = region;

    this.countryService.searchRegion( region )
    .subscribe( countries => this.countries = countries);

  }


}
