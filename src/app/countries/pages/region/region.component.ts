import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
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
  }

  show( regionActive: string ) {
    this.error = false;
    this.regionActive = regionActive;

    this.countryService.searchRegion( regionActive )
    .subscribe( (countries) => {
      console.log(countries);
      this.countries = countries
    }, (err) => {
      this.error = true;
      this.countries = [];
    })
  }
}
