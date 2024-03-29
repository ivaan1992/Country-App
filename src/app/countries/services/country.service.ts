import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private api: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searchCountry( term: string ): Observable<Country[]> {

    const url = `${this.api}/name/${ term }`

    return this.http.get<Country[]>( url );
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${this.api}/capital/${ term }`

    return this.http.get<Country[]>( url );
  }

  getCountryId( id: string ): Observable<Country> {
    const url = `${this.api}/alpha/${ id }`

    return this.http.get<Country>( url );
  }

  searchRegion( region: string ) {
    const url = `${this.api}/region/${ region }`

    return this.http.get<Country[]>( url )
    .pipe(
      tap( console.log )
     )
  }
}
