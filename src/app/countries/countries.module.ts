import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { RegionComponent } from './pages/region/region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { CountryComponent } from './pages/country/country.component';



@NgModule({
  declarations: [
    CapitalComponent,
    RegionComponent,
    SeeCountryComponent,
    CountryComponent
  ],
  exports: [
    CapitalComponent,
    RegionComponent,
    SeeCountryComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
