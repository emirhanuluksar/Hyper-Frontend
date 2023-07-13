import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Boat } from 'src/store/model/boat.model';

@Injectable()
export class BoatService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
    console.log(this.apiUrl);
  }

  getBoats(): Observable<Boat[]> {
    const endpoint = `${this.apiUrl}boat/GetAll`;
    return this.http.get<{ Boats: Boat[] }>(endpoint).pipe(
      map((response) => response.Boats),
      tap((boats) => {
        console.log('Baots:', boats);
      })
    );
  }
}
