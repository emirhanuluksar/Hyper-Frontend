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

  addBoat(boat: Boat): Observable<Boat> {
    const endpoint = `${this.apiUrl}boat/AddBoat`;
    return this.http.post<Boat>(endpoint, boat).pipe(
      tap((newBoat) => {
        console.log('Added boat:', newBoat);
      })
    );
  }

  updateBoat(boat: Boat): Observable<Boat> {
    const endpoint = `${this.apiUrl}boat/UpdateBoat`;
    return this.http.put<Boat>(endpoint, boat).pipe(
      tap((updatedBoat) => {
        console.log('Updated boat:', updatedBoat);
      })
    );
  }

  deleteBoat(boat: Boat): Observable<Boat> {
    const endpoint = `${this.apiUrl}boat/DeleteBoat/${boat.id}`;
    return this.http.delete<Boat>(endpoint).pipe(
      tap((deletedBoat) => {
        console.log('Deleted boat:', deletedBoat);
      })
    );
  }

  getBoatsByColor(color: string): Observable<Boat[]> {
    const endpoint = `${this.apiUrl}boat/GetBoatsByColor/${color}`;
    return this.http.get<Boat[]>(endpoint).pipe(
      tap((boats) => {
        console.log('GetBoatsByColor:', boats);
      })
    );
  }

  getBoatById(id: string): Observable<Boat> {
    const endpoint = `${this.apiUrl}boat/GetBoatById/${id}`;
    return this.http.get<Boat>(endpoint).pipe(
      tap((boat) => {
        console.log('Boat:', boat);
      })
    );
  }
}
