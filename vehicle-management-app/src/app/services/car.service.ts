import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../store/model/car.model';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class CarService {
  private apiUrl = `https://localhost:7066/api/Car/GetAll`;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<{ Cars: Car[] }>(this.apiUrl).pipe(
      map((response) => response.Cars),
      tap((cars) => {
        console.log('Cars:', cars);
      })
    );
  }
}
