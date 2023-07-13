import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../store/model/car.model';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class CarService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log(this.apiUrl);
  }

  getCars(): Observable<Car[]> {
    const endpoint = `${this.apiUrl}car/GetAll`;
    return this.http.get<{ Cars: Car[] }>(endpoint).pipe(
      map((response) => response.Cars),
      tap((cars) => {
        console.log('Cars:', cars);
      })
    );
  }
}
